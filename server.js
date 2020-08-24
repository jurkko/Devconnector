const express = require('express');

const app = express();

app.get(`/`, (req, res) => res.send('API running'));

const PORT =  process.env.PORT || 5000; // liston on PORT form .env file || 5000

app.listen(PORT, () => console.log(`Server on port ${PORT}`)); 