const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const serverRoutes = require('./routes/serverRoutes');
const pelangganRoutes = require('./routes/pelangganRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', serverRoutes,
     pelangganRoutes
    );

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
