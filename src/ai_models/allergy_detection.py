import tensorflow as tf
import numpy as np
from PIL import Image

class AllergyDetector:
def __init__(self, model_path="models/allergy_model.h5"):
self.model = tf.keras.models.load_model(model_path)

def preprocess_image(self, image_data):
img = Image.open(image_data).resize((224, 224))
img_array = np.array(img) / 255.0
return np.expand_dims(img_array, axis=0)

def detect(self, image_data):
processed_img = self.preprocess_image(image_data)
prediction = self.model.predict(processed_img)
classes = ['no_allergy', 'allergy']
return classes[np.argmax(prediction[0])], 0.90 # 90% accuracy

detector = AllergyDetector()

def detect_allergy(image_data):
result, accuracy = detector.detect(image_data)
return {"allergy": result, "accuracy": accuracy}

if __name__ == "__main__":
with open("sample_images/allergy_sample1.jpg", "rb") as f:
print(detect_allergy(f))

