// Basic REST API structure
const express = require('express');
const app = express();
app.get('/api', (req, res) => res.send('API Working'));
app.listen(3000, () => console.log('Server running'));
