import pandas as pd
import os
import kaggle
from fdb.datasets import FraudDatasetBenchmark

os.environ['KAGGLE_USERNAME'] = "maanviralpatel "
os.environ['KAGGLE_KEY'] = "21830302"

try:
    kaggle.api.authenticate()
    print("Kaggle API authentication successful.")
except Exception as e:
    print(f"Failed to authenticate Kaggle API: {e}")

all_keys = ['fakejob', 'vehicleloan', 'malurl', 'ieeecis', 'ccfraud', 'fraudecom', 'twitterbot', 'ipblock'] 
key = 'ipblock'

def load_local_data():
    train_path = 'path/to/your/local/train_file.csv'
    test_path = 'path/to/your/local/test_file.csv'
    train_df = pd.read_csv(train_path)
    test_df = pd.read_csv(test_path)
    return train_df, test_df

obj = FraudDatasetBenchmark(
    key=key,
    load_pre_downloaded=False,  # default
    delete_downloaded=True,  # default
    add_random_values_if_real_na = { 
        "EVENT_TIMESTAMP": True, 
        "LABEL_TIMESTAMP": True,
        "ENTITY_ID": True,
        "ENTITY_TYPE": True,
        "ENTITY_ID": True,
        "EVENT_ID": True
        } # default
    )
print(obj.key)

print('Train set: ')
# display(obj.train.head())
print(len(obj.train.columns))
print(obj.train.shape)

print('Test set: ')
# display(obj.test.head())
print(obj.test.shape)

print('Test scores')
# display(obj.test_labels.head())
print(obj.test_labels['EVENT_LABEL'].value_counts())
print(obj.train['EVENT_LABEL'].value_counts(normalize=True))
print('=========')

# Making our own objects:

obj_ieee = FraudDatasetBenchmark(
    key = 'ieeecis',
    load_pre_downloaded=True,  # default
    delete_downloaded=False,  # default
    add_random_values_if_real_na = { 
        "EVENT_TIMESTAMP": True, 
        "LABEL_TIMESTAMP": True,
        "ENTITY_ID": True,
        "ENTITY_TYPE": True,
        "ENTITY_ID": True,
        "EVENT_ID": True
        } # ieee object
    )

obj_fraudecom = FraudDatasetBenchmark(
    key = 'fraudecom',
    load_pre_downloaded=True,  # default
    delete_downloaded=False,  # default
    add_random_values_if_real_na = { 
        "EVENT_TIMESTAMP": True, 
        "LABEL_TIMESTAMP": True,
        "ENTITY_ID": True,
        "ENTITY_TYPE": True,
        "ENTITY_ID": True,
        "EVENT_ID": True
        } # fraudecom object
    )

obj_ccfraud = FraudDatasetBenchmark(
    key = 'ccfraud',
    load_pre_downloaded=True,  # default
    delete_downloaded=False,  # default
    add_random_values_if_real_na = { 
        "EVENT_TIMESTAMP": True, 
        "LABEL_TIMESTAMP": True,
        "ENTITY_ID": True,
        "ENTITY_TYPE": True,
        "ENTITY_ID": True,
        "EVENT_ID": True
        } # ieee object
    )

obj_sparknov = FraudDatasetBenchmark(
    key = 'sparknov',
    load_pre_downloaded=True,  # default
    delete_downloaded=False,  # default
    add_random_values_if_real_na = { 
        "EVENT_TIMESTAMP": True, 
        "LABEL_TIMESTAMP": True,
        "ENTITY_ID": True,
        "ENTITY_TYPE": True,
        "ENTITY_ID": True,
        "EVENT_ID": True
        } # sparknov object
    )

print("I made it to the end of the script!")