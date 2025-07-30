const Crypto = require('../../utils/crypto');

describe('Crypto', () => {
test('encrypt and decrypt', () => {
const data = "test data";
const encrypted = Crypto.encrypt(data);
const decrypted = Crypto.decrypt(encrypted);
expect(decrypted).toBe(data);
});
});
