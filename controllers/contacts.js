const contacts =  require('../data/contacts');
//gets the list
const list = (req, res) => {
    res.json(contacts);
}
//gets by id
const show = (req, res) => {
    res.json(contacts.filter(user => user._id == (req.params.id)));
}
//creates a post
const create = () => {}

module.exports = { list, show, create }