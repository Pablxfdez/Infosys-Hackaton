import ssl
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import warnings

# Disable SSL verification (use with caution)
ssl._create_default_https_context = ssl._create_unverified_context

# Suppress warnings
warnings.filterwarnings("ignore")

# Check if CUDA is available, otherwise use CPU
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.1")
tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.1")

text = "<s>[INST] Below is a conversation transcript [/INST]"
"Your credit card has been stolen, and you need to contact us to resolve the issue. We will help you protect your information and prevent further fraud.</s> "
"[INST] Analyze the conversation and determine if it's fraudulent or legitimate. [/INST]"

encodeds = tokenizer(text, return_tensors="pt", add_special_tokens=False)

model_inputs = encodeds.to(device)
model.to(device)

generated_ids = model.generate(**model_inputs, max_new_tokens=1000, do_sample=True)
decoded = tokenizer.batch_decode(generated_ids)
print(decoded[0])