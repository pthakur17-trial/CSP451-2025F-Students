// Server file with login route
const express = require('express');
const app = express();
app.get('/login', (req, res) => res.send('Login Page'));
app.listen(3000, () => console.log('Auth Server running'));
