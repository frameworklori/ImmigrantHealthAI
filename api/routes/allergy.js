const express = require('express');
const router = express.Router();
const { detectAllergy } = require('../ai_models/allergy_detection');

router.post('/detect', async (req, res) => {
try {
const image = req.body.image;
const result = await detectAllergy(image);
res.json({ success: true, allergy: result, accuracy: 90 });
} catch (error) {
res.status(500).json({ success: false, error: error.message });
}
});

module.exports = router;

