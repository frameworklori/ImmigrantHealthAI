# API Documentation

## Overview
API for ImmigrantHealthAI, reducing healthcare costs ($0.2/use, $900M/year) for 11M undocumented immigrants (4M in CA, AB60/Medi-Cal).

## Endpoints
- **POST /api/allergy/detect**
- Description: Detect allergies from image (90% accuracy).
- Request: `{ image: base64 }`
- Response: `{ success: true, allergy: "e.g., pollen", accuracy: 90 }`
- **POST /api/drug/identify**
- Description: Identify drugs from image (95% accuracy, OCR+FDA).
- Request: `{ image: base64 }`
- Response: `{ success: true, drug: "e.g., Aspirin", accuracy: 95 }`
- **POST /api/record/save**
- Description: Save encrypted health record (AES-256, HIPAA-compliant).
- Request: `{ data: "health info" }`
- Response: `{ success: true, recordId: "uuid", encrypted: "..." }`
- **POST /api/anon_id/generate**
- Description: Generate anonymous ID (reduces fear by 50%, MPI data).
- Request: `{ name: "user input" }`
- Response: `{ success: true, anonId: "sha256_hash", reducesFear: 50 }`

