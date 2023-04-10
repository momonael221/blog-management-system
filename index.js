const express   = require('express')
const app       = express();
const PORT      = 3000;
const HOST      = '127.0.0.1';

//importer les routes
const articleRoutes = require("./routes/article");
const authorRoutes = require("./routes/author");


//definition des routes
app.use("/author", authorRoutes);
app.use("/article", articleRoutes);


// lancement du serveur
app.listen(PORT, () => { console.log(`Server is running at http://${HOST}:${PORT}`) })