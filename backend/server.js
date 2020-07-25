const express = require('express');
const appRoot = require('app-root-path');
const bodyParser = require('body-parser');
const serveIndex = require('serve-index');


const app = express();
var cors = require('cors');
app.use(cors());

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const services = require(`${appRoot}/Controller`);
app.use('/', services);


app.use('/invoices', express.static('invoices'), serveIndex('invoices', { 'icons': true }));

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
});
