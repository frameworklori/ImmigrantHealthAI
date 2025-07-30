const express = require('express');
const router = express.Router();
const crypto = require('crypto-js');
const { verifyToken } = require('./middleware/auth');

router.post('/save', verifyToken, (req, res) => {
try {
const { data } = req.body;
const encrypted = crypto.AES.encrypt(data, process.env.AES_KEY).toString();
res.json({ success: true, recordId: crypto.randomUUID(), encrypted });
} catch (error) {
res.status(500).json({ success: false, error: error.message });
}
});

module.exports = router;
