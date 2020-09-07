const vehicles = require('../data/vehicles');

const list = (req, res) => {
    res.json(vehicles);
};
const show = (req, res) => {
    res.json(vehicles.filter(vehicle => vehicle._id == (req.params.id)));
};
const create = (req, res) => {
    let counter = vehicles.length +1;
    let newV = req.body;
    newV._id = counter;
    vehicles.push(newV);
    res.json(vehicles);
};

module.exports = { list, show, create }//exports the above to the router