const express   = require('express');
const mongoose = require("mongoose");
const app       = express();
const PORT      = 3000;
const HOST      = '127.0.0.1';
const URI       = "mongodb+srv://momonael221:Adamaawa2008@cluster0.rqs8dbf.mongodb.net/blog"

// ROUTES IMPORTATION
const authorRoutes    = require('./routes/author');
const articleRoutes   = require('./routes/article');
const userRoutes      = require('./routes/user');


// PARSING JSON BODY
app.use(express.json());


// ROUTES DEFINITION
app.use('/author', authorRoutes);
app.use('/article', articleRoutes);
app.use('/user', userRoutes);


// DB CONNECTION
mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à la base de données réussie !"))
    .catch(() => console.log("Connexion à la base de données échouée !"));


// SERVER LAUNCH
app.listen(PORT, () => { console.log(`Server is running at http://${HOST}:${PORT}`) });