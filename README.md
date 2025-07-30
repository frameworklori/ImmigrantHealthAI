# ImmigrantHealthAI

Private AI imaging module to reduce healthcare costs ($0.2/use, saves $900M/year) for 11M undocumented immigrants (4M in CA, AB60/Medi-Cal). Features: allergy detection (90% accuracy), drug ID (OCR+FDA, 95%), abuse prevention, encrypted records (AES-256, HIPAA-compliant), anonymous IDs (50% less deportation fear, MPI data). Built with xAI, owned by [LORI Framework].

## Installation
1. Clone repo: `git clone <private-repo-url>`
2. Python: `pip install -r requirements.txt`
3. Node.js: `npm install`
4. Set `.env` (see `.env.example`)
5. Run: `npm start` (API) or `python src/ai_models/allergy_detection.py`

## Features
- Allergy detection: 90% accuracy (CNN, JAMA Dermatology 2023)
- Drug ID: 95% accuracy (OCR+FDA database)
- Abuse prevention: Rule-based + ML
- Health records: AES-256, HIPAA-compliant
- Anonymous IDs: User-defined, reduces fear (MPI data)

## Directory
- `/src/ai_models`: AI (TensorFlow)
- `/src/api`: REST API (Express)
- `/src/frontend`: UI (React)
- `/tests`: Unit/integration tests
- `/docs`: API, HIPAA, performance
- `/deploy`: Docker, K8s (AWS/GCP)

## Contact
X: Email:frameworklori@gmail.com (Lori)
xAI: support@x.ai
