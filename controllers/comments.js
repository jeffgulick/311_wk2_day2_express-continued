const comments =  require('../data/comments');

const list = (req, res) => {
    res.json(comments);
};
const show = (req, res) => {
    res.json(comments.filter(user => user._id == (req.params.id)));
};
const create = (req, res) => {};

module.exports = { list, show, create };
