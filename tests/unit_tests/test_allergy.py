import pytest
from src.ai_models.allergy_detection import detect_allergy

def test_detect_allergy():
with open("sample_images/allergy_sample1.jpg", "rb") as f:
result = detect_allergy(f)
assert result["allergy"] in ["no_allergy", "allergy"]
assert result["accuracy"] == 0.90

if __name__ == "__main__":
pytest.main([__file__])
