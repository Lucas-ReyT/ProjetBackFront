const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/book');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l API de gestion de livres ! ' });
});


app.use('/api/book', bookRoutes);


mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/library', { // Change "ecommerce" en "library"
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(' MongoDB connecté avec succès !'))
    .catch((err) => console.error(' Erreur de connexion à MongoDB :', err));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(` Serveur en ligne : http://localhost:${PORT}`);
});
