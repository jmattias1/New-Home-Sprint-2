const express = require ('express');
const path = require ('path');
const app = express();
const port = 3030;

app.use (express.static('public'));

app.listen (port, () => console.log(`Server running in port: https://localhost:${port}`));

app.get ('/', (req,res) => res.sendFile (path.join(__dirname, 'views', 'index.html')))
app.get ('/about', (req,res) => res.sendFile (path.join(__dirname, 'views', 'login.html')))
app.get ('/contact', (req,res) => res.sendFile (path.join(__dirname, 'views', 'productCart.html')))
app.get ('/music', (req,res) => res.sendFile (path.join(__dirname, 'views', 'productDetail.html')))
app.get ('/music', (req,res) => res.sendFile (path.join(__dirname, 'views', 'register.html')))
