require ("dotenv").config();
const express = require("express");
const massive = require("massive");
// const controller = require("./controller");


const app = express();

const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("DATABASE CONNECTED")
  })
  .catch(err => console.log(err));

app.use(express.json());

app.post('/api/product', controller.create);
app.get('/api/inventory', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.put('/api/products/:id', controller.update);
app.delete('/api/products/:id', controller.delete);
    

const port = process.env.SERVER_PORT || 6505;
app.listen(port, () => {
    console.log(`The server is listening on the super metal port ${port}`);
});
                // app.get('/', (req, res) => {
                //     res.send('Hello World');
                // });