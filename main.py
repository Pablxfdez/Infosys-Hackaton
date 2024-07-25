from fastapi import FastAPI, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import Union

import pandas as pd
from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData, Float
from sqlalchemy.orm import sessionmaker

from helpers import predict_from_audio, justify_prediction
from audio_to_text import audio_to_text
from features import add_features
from explain import get_shap_values, get_llm_explanation, get_feature_importance

# Application and Database Configuration
app = FastAPI()
DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
metadata = MetaData()

# Database Table Definition
transactions_table = Table(
    "transactions",
    metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("data", String),
    Column("label", String),
    Column("logit", String),
    Column("explanation", String),
)
metadata.create_all(bind=engine)

# Shared Data Model
class Features(BaseModel):
    features: dict


# Data Model for Tabular Data
class TabularData(BaseModel):
    id: int
    data: Features


# Helper function to insert data into database
def insert_entry(db: sessionmaker, entry: dict) -> None:
    insert_stmt = transactions_table.insert().values(entry)
    db.execute(insert_stmt)
    db.commit()


# Audio Processing Endpoint
@app.post("/process/audio/")
async def process_audio(file: UploadFile = File(...)):
    if file.content_type not in ["audio/wav", "audio/mpeg"]:
        raise HTTPException(status_code=400, detail="Invalid audio format")

    audio_path = f"temp_audio.{file.filename.split('.')[-1]}"

    try:
        with open(audio_path, "wb") as buffer:
            buffer.write(file.file.read())

        text = audio_to_text(audio_path)
        prediction, justification = predict_from_audio(text)
        os.remove(audio_path)

        entry = {
            "data": text,
            "label": prediction,
            "explanation": justification,
        }
        with SessionLocal() as db:
            insert_entry(db, entry)

        return entry

    except Exception as e:
        os.remove(audio_path)
        raise HTTPException(status_code=500, detail=str(e))


# Tabular Data Processing Endpoint
@app.post("/process/tabular/")
async def process_tabular(data: TabularData):
    try:
        entry_df = pd.DataFrame([data.data.features])
        entry_df = add_features(entry_df)

        prediction, logit = model.predict(entry_df)  # Assuming pre-defined model
        shap_values = get_shap_values(entry_df)
        feature_importance = get_feature_importance(shap_values, entry_df)
        llm_explanation = get_llm_explanation(shap_values, feature_importance)

        result = {
            "id": data.id,
            "data": json.dumps(data.data.features),
            "label": prediction,
            "logit": json.dumps(logit),
            "explanation": llm_explanation,
        }

        with SessionLocal() as db:
            insert_entry(db, result)

        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
