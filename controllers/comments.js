const comments =  require('../data/comments');

const list = (req, res) => {
    res.json(comments);
};
const show = (req, res) => {
    res.json(comments.filter(user => user._id == (req.params.id)));
};
const create = (req, res) => {
    let counter = comments.length +1;
    let newComment = req.body;
    newComment._id = counter;
    comments.push(newComment);
    res.json(comments);
};

module.exports = { list, show, create };
