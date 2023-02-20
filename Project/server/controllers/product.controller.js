const Product = require("../models/product.model")
// testApi
// addProduct
// allProducts
// getOneProduct
// updateProduct
// deleteProduct

module.exports.testApi = (req, res) => {
    res.json({ status: 'All good Captain' })
}

module.exports.addProduct = (req, res) => {
    const newProduct = req.body
    Product.create(newProduct)
        .then(product => res.json(product))
        .catch(err => res.json(err))
};

module.exports.allProducts = (req, res) => {
    Product.find()
        .then((products) => res.json(products))
        .catch((err) => res.json(err))
};

module.exports.getOneProduct = (req, res) => {
    const idFromParam = req.params.id
    Product.findOne({ _id: idFromParam })
        .then((one) => res.json(one))
        .catch((err) => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    const idParam = req.params.id
    const updatedValue = req.body
    Product.findOneAndUpdate({ _id: idParam }, updatedValue, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    const id = req.params.id
    Product.deleteOne({ _id: id })
        .then(message => res.json(message))
        .catch(err => res.json(err))
}