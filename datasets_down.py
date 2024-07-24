from fdb.datasets import FraudDatasetBenchmark
import pickle as pkl
from os import path  # Import for path manipulation

transdata_keys = ['ieeecis', 'ccfraud', 'fraudecom', 'sparknov']

def transform_pickle(key, obj, pickle_folder="datasetpickles"):
  """Saves a FraudDatasetBenchmark object as a pickle in the specified folder.

  Args:
      key (str): The key associated with the dataset.
      obj (FraudDatasetBenchmark): The FraudDatasetBenchmark object to save.
      pickle_folder (str, optional): The folder path where pickles will be saved. Defaults to "datasetpickles".
  """

  pickle_path = path.join(pickle_folder, key + ".pkl")
  with open(pickle_path, 'wb') as file:
    pkl.dump(obj, file)
  print(f"{key} saved to {pickle_path}.")

def main():
  for key in transdata_keys:
    obj = FraudDatasetBenchmark(
        key=key,
        load_pre_downloaded=False,  # default
        delete_downloaded=False,  # default
        add_random_values_if_real_na={ 
          "EVENT_TIMESTAMP": True, 
          "LABEL_TIMESTAMP": True,
          "ENTITY_ID": True,
          "ENTITY_TYPE": True,
          "ENTITY_ID": True,
          "EVENT_ID": True
        }  # default
    )
    print(obj.key)

    print('Train set: ')
    print(len(obj.train.columns))
    print(obj.train.shape)

    print('Test set: ')
    print(obj.test.shape)

    print('Test scores')
    print(obj.test_labels['EVENT_LABEL'].value_counts())
    print(obj.train['EVENT_LABEL'].value_counts(normalize=True))
    print('=========')

    transform_pickle(key, obj)

if __name__ == '__main__':
  main()
