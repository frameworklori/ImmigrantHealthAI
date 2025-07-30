import tensorflow as tf
import numpy as np
from preprocess import preprocess_images

def train_model():
# Mock data
preprocess_images("sample_images", "processed_images")
x_train = np.load("processed_images/allergy_sample1.npy")
y_train = np.array([1]) # 1 for allergy
model = tf.keras.Sequential([
tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
tf.keras.layers.MaxPooling2D((2, 2)),
tf.keras.layers.Flatten(),
tf.keras.layers.Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(x_train[np.newaxis, ...], y_train, epochs=5)
model.save("models/allergy_model.h5")

if __name__ == "__main__":
train_model()

