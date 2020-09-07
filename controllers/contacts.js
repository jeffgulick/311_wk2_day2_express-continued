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
const create = (req, res) => {
    let counter = contacts.length +1;
    let newContact = req.body;
    newContact._id = counter;
    contacts.push(newContact);
    res.json(contacts);
}

module.exports = { list, show, create }//exports the above to the router