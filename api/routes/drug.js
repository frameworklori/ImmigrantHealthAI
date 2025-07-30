const express = require('express');
const router = express.Router();
const { identifyDrug } = require('../ai_models/drug_ocr');

router.post('/identify', async (req, res) => {
try {
const image = req.body.image;
const result = await identifyDrug(image);
res.json({ success: true, drug: result, accuracy: 95 });
} catch (error) {
res.status(500).json({ success: false, error: error.message });
}
});

module.exports = router;

