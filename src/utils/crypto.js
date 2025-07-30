const CryptoJS = require('crypto-js');

class Crypto {
static encrypt(data) {
return CryptoJS.AES.encrypt(data, process.env.AES_KEY).toString();
}

static decrypt(encrypted) {
const bytes = CryptoJS.AES.decrypt(encrypted, process.env.AES_KEY);
return bytes.toString(CryptoJS.enc.Utf8);
}
}

module.exports = Crypto;

