import os
from PIL import Image
import numpy as np

def preprocess_images(input_dir, output_dir):
if not os.path.exists(output_dir):
os.makedirs(output_dir)
for filename in os.listdir(input_dir):
if filename.endswith(".jpg"):
img = Image.open(os.path.join(input_dir, filename)).resize((224, 224))
img_array = np.array(img) / 255.0
np.save(os.path.join(output_dir, f"{os.path.splitext(filename)[0]}.npy"), img_array)

if __name__ == "__main__":
preprocess_images("sample_images", "processed_images")

