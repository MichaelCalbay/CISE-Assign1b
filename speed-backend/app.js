const express = require('express');
const connectDB = require('./db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3032;

app.listen(port, () => console.log(`Server running on port ${port}`));