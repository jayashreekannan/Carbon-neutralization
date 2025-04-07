const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emissionRoutes = require('./routes/emissionRoutes');
require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', emissionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
