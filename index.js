const express = require("express");
const bodyParser = require("body-parser");

const appContacts = require('./routes/contacts');
const appComments = require('./routes/comments');
const appVehicles = require('./routes/vehicles');
const appProducts = require('./routes/products');
const app = express();

app.use(bodyParser.json());

app.use(appContacts);
app.use(appComments);
app.use(appVehicles);
app.use(appProducts);

const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
