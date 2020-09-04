const products = require('../data/products');
//gets the list
const list = (req, res) => {
    res.json(products);
}
//gets by id
const show = (req, res) => {
    res.json(products.filter(product => product._id == (req.params.id)));
}
//post
const create = (req, res) => {
    let counter = products.length +1;
    let newProduct = req.body;
    newProduct._id = counter;
    products.push(newProduct);
    res.json(products);
}

module.exports = { list, show, create }//exports the above to the router