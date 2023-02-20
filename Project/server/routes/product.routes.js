const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api/test", ProductController.testApi);
    // creat one
    app.post("/api/product", ProductController.addProduct);
    // display all
    app.get("/api/products", ProductController.allProducts);
    // display one
    app.get("/api/product/:id", ProductController.getOneProduct);
    // update one
    app.put("/api/product/:id", ProductController.updateProduct);
    // delete one
    app.delete("/api/product/:id", ProductController.deleteProduct);
}