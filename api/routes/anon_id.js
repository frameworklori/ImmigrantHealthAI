const express = require('express');
const router = express.Router();
const crypto = require('crypto-js');
const { verifyToken } = require('./middleware/auth');

router.post('/generate', verifyToken, (req, res) => {
try {
const { name } = req.body;
const anonId = crypto.SHA256(name + Date.now()).toString();
res.json({ success: true, anonId, reducesFear: 50 });
} catch (error) {
res.status(500).json({ success: false, error: error.message });
}
});

module.exports = router;

