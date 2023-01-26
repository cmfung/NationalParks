require('dotenv').config();
const express = require('express');
const cors = require('cors');
const controllers = require('./controllers/controllers');

const PORT = process.env.PORT || 4001;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/parks', controllers.getParks);
app.get('/parksByState/:state', controllers.getParksByState);
// commit checking that .env removed

app.listen(PORT, () => { console.log(`Listening at http://localhost:${PORT}`); });