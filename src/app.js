const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const productManager = new ProductManager('products.json');

app.get('/products', async (req, res) => {
  const products = await productManager.readProducts();
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  if (limit) {
    res.send(products.slice(0, limit));
  } else {
    res.send(products);
  }
});

app.get('/products/:pid', async (req, res) => {
  const products = await productManager.readProducts();
  const product = products.find(p => p.id === parseInt(req.params.pid));
  if (product) {
    res.send(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

app.listen(8080, () => {
  console.log('Servidor inicado en el puerto 8080');
});