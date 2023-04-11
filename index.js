const express   = require('express');
const mongoose = require("mongoose");
const app       = express();
const PORT      = 3000;
const HOST      = '127.0.0.1';
const URI       = "mongodb+srv://momonael221:Adamaawa2008@cluster0.rqs8dbf.mongodb.net/?retryWrites=true&w=majority"
//importer les routes
const articleRoutes = require("./routes/article");
const authorRoutes = require("./routes/author");
const userRoutes = require("./routes/user");



//importer les models
const userModels = require("./models/user");


//definition des routes
app.use("/author", authorRoutes);
app.use("/article", articleRoutes);
app.use("/user", userRoutes);




// DB CONNECTION
mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connexion à la base de données réussie !"))
	.catch(() => console.log("Connexion à la base de données échouée !"));

// lancement du serveur
app.listen(PORT, () => { console.log(`Server is running at http://${HOST}:${PORT}`) })