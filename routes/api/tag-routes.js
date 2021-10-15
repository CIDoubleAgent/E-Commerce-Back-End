const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  let data = await Tag.findAll({
    include: [
      {model: Product, attributes: ["id", "product_name", "price", "stock", "category_id"]}
    ]
  });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  let data = await Tag.findOne({
    where: {id: req.params.id},
    include: [
      {model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id'], required: true}
    ]
  });
  res.json(data);
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({where: {id: req.params.id}})
  res.send("Tag removed");
});

module.exports = router;
