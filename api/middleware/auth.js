const crypto = require('crypto-js');

const verifyToken = (req, res, next) => {
const token = req.headers['authorization'];
if (!token) return res.status(403).json({ error: 'No token provided' });

try {
const decrypted = crypto.AES.decrypt(token, process.env.AES_KEY).toString(crypto.enc.Utf8);
req.user = JSON.parse(decrypted);
next();
} catch (error) {
res.status(401).json({ error: 'Invalid token' });
}
};

module.exports = { verifyToken };
