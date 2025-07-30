const axios = require('axios');

class FDAAPI {
static async fetchDrugInfo(drugName) {
try {
const response = await axios.get(`https://api.fda.gov/drug/label?api_key=${process.env.FDA_API_KEY}&search=${encodeURIComponent(drugName)}`);
return response.data.results[0]?.openfda?.generic_name || 'unknown';
} catch (error) {
return 'error';
}
}
}

module.exports = FDAAPI;
