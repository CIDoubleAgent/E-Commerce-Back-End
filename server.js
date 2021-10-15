const express = require('express');
const routes = require('./routes');
const {Category, Product, Tag} = require('./models');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
const categorySync = Category.sync()
const productSync = Product.sync()
const tagSync = Tag.sync()
Promise.all([categorySync, productSync, tagSync])
.then(function() {
  app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})});
