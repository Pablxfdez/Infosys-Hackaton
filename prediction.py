
import xgboost as xgb
import shap
import pandas as pd
import numpy as np
from transformers import pipeline
import matplotlib.pyplot as plt

# Load the XGBoost model
with open('xgboost.pkl', 'rb') as f:
    model = pickle.load(f)
generator = pipeline('text-generation', model = 'EleutherAI/gpt-neo-125M')

def get_prediction_and_explanation(X_pred, model, generator = generator, explainer=None):
    # Make prediction and get probabilities (logits)
    dtest = xgb.DMatrix(X_pred)
    pred_prob = model.predict(dtest)
    pred_label = np.argmax(pred_prob, axis=1)

    # Explain the prediction with SHAP (if explainer not provided)
    if explainer is None:
        explainer = shap.Explainer(model)
        shap_values = explainer(X_pred)
    else:
        shap_values = explainer(X_pred)  # Use existing explainer if available

    # Output prediction and probabilities
    print(f"Predicted label: {pred_label[0]}")
    print(f"Prediction probabilities: {pred_prob[0]}")

    # Create a DataFrame from SHAP summary
    shap_summary_df = pd.DataFrame({
        'Features': X_pred.columns.tolist(),
        'SHAP Value': shap_values.values[0].tolist(),
        'Expected_value' : shap_values.base_values[0].tolist(),
        'Feature_values' : X_pred.base_values[0].tolist()
    }) 
    shap_summary_df = shap_summary_df.sort_values(by='SHAP Value', ascending=False)  # Sort by importance
    prompt = f'Given the following data dictionary of shap summary of the model, explain without entering in mathematical discussion \
        which features affect the most to the prediction and why. Do it brief. The dictionary is the next one: {str(shap_summary_df)}.'
    decoded_output = generator(prompt, max_length = 150, num_return_sequences = 1)


    explanation = decoded_output.strip()  # Remove extra whitespace
    


    # Plot SHAP values (force plot and summary plot)
    shap.initjs()
    force_plot = shap.force_plot(shap_values.base_values[0], shap_values.values[0], X_test_entry.iloc[0], matplotlib=True)
    plt.savefig('shap_force_plot.png')

    summary_plot = shap.summary_plot(shap_values.values, X_test_entry, plot_type='bar', show=False)
    plt.savefig('shap_summary_plot.png')

    return pred_prob, pred_label, explanation, shap_summary_df

