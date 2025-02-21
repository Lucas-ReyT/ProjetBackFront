

## Installation


./run.sh
npm install
npm start


## Utilisation

npm start

Routes

    GET / : Message de bienvenue.
    POST /api/products : Créer un produit.
    GET /api/products : Lister tous les produits.
    GET /api/products/:id : Obtenir un produit.
    PUT /api/products/:id : Mettre à jour un produit.
    DELETE /api/products/:id : Supprimer un produit.

Exemples de requêtes
Créer un produit

curl -X POST http://localhost:5000/api/products -H "Content-Type: application/json" -d '{"name": "Nouveau Produit", "price": 19.99, "description": "Description"}'

Lister tous les produits

curl http://localhost:5000/api/products

Obtenir un produit

curl http://localhost:5000/api/products/12345

Mettre à jour un produit

curl -X PUT http://localhost:5000/api/products/12345 -H "Content-Type: application/json" -d '{"name": "Produit Mis à Jour", "price": 24.99, "description": "Description mise à jour"}'

Supprimer un produit

curl -X DELETE http://localhost:5000/api/products/12345