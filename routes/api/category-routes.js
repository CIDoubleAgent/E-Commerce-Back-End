const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  let data = await Category.findAll({
    include: [
      {model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}
    ]
  });
  res.json(data);
})

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  let data = await Category.findOne({
    where: {id: req.params.id},
    include: [
      {model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']}
    ]
  });
  res.json(data);
});

// create a new category
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      "category_name": "Sporting Goods"
    }
  */
 Category.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  await Category.destroy({where: {id: req.params.id}})
  res.send("Category removed");
});

module.exports = router;
