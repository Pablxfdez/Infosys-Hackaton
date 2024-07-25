import sys
import ssl
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import warnings

# Suppress warnings
warnings.filterwarnings("ignore")

def load_model():
    device = "cuda" if torch.cuda.is_available() else "cpu"
    print(f"Using device: {device}")
    
    model = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-Instruct-v0.1")
    tokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct-v0.1")
    
    return model.to(device), tokenizer, device

def analyze_fraud(model, tokenizer, device, input_text):
    prompt = f"<s>[INST] Analyze the following conversation and determine if it's fraudulent or legitimate. If it is fraudulent, state 'FRAUD' followed by the type of fraud and your reasoning. If it's legitimate, state 'LEGITIMATE'. Conversation: {input_text} [/INST]"
    
    encodeds = tokenizer(prompt, return_tensors="pt", add_special_tokens=False)
    model_inputs = encodeds.to(device)
    
    generated_ids = model.generate(**model_inputs, max_new_tokens=200, do_sample=True)
    response = tokenizer.decode(generated_ids[0], skip_special_tokens=True)
    
    # Extract prediction and justification
    if response.strip().upper().startswith("FRAUD"):
        prediction = 1
        justification = response.strip()
    elif response.strip().upper().startswith("LEGITIMATE"):
        prediction = 0
        justification = response.strip()
    else:
        prediction = -1  # Unclear response
        justification = "The model's response was unclear. Here's what it said: " + response.strip()
    
    return prediction, justification

def main(input_text):
    model, tokenizer, device = load_model()
    prediction, justification = analyze_fraud(model, tokenizer, device, input_text)
    return prediction, justification

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python script.py \"Your text here\"")
        sys.exit(1)
    
    input_text = sys.argv[1]
    prediction, justification = main(input_text)    
    
    print(f"Prediction: {prediction}")
    print(f"Justification: {justification}")