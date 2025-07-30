const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const allergyRouter = require('./routes/allergy');
const drugRouter = require('./routes/drug');
const recordRouter = require('./routes/record');
const anonIdRouter = require('./routes/anon_id');

app.use(express.json());
app.use(cors());
app.use('/api/allergy', allergyRouter);
app.use('/api/drug', drugRouter);
app.use('/api/record', recordRouter);
app.use('/api/anon_id', anonIdRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;

