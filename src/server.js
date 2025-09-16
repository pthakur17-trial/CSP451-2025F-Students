// Basic REST API structure + login route
const express = require('express');
const app = express();

app.get('/api', (req, res) => res.send('API Working'));
app.get('/login', (req, res) => res.send('Login Page'));

app.listen(3000, () => console.log('Server running'));
