import pytest
from src.ai_models.drug_ocr import identify_drug

def test_identify_drug():
with open("sample_images/drug_sample1.jpg", "rb") as f:
result = identify_drug(f)
assert result["drug"] != "unknown"
assert result["accuracy"] == 0.95

if __name__ == "__main__":
pytest.main([__file__])
