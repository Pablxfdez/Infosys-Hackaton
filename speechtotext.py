import sys
import speech_recognition as sr
from mistral_fraud_detection import main as fraud_detection

def transcribe_audio(audio_file_path):
    recognizer = sr.Recognizer()
    
    with sr.AudioFile(audio_file_path) as source:
        audio = recognizer.record(source)
    
    try:
        text = recognizer.recognize_google(audio)
        print("Transcription: " + text)
        return text
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand the audio")
        return None
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return None

def process_audio_for_fraud_detection(audio_file_path):
    # Step 1: Transcribe audio to text
    transcribed_text = transcribe_audio(audio_file_path)
    
    if transcribed_text is None:
        print("Could not transcribe the audio. Exiting.")
        return
    
    # Step 2: Perform fraud detection on the transcribed text
    prediction, justification = fraud_detection(transcribed_text)
    
    # Step 3: Print results
    print(f"\nFraud Detection Results:")
    print(f"Prediction: {'Fraud' if prediction == 1 else 'Not Fraud' if prediction == 0 else 'Unclear'}")
    print(f"Justification: {justification}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python audio_fraud_detection.py <path_to_audio_file>")
        sys.exit(1)
    
    audio_file_path = sys.argv[1]
    process_audio_for_fraud_detection(audio_file_path)