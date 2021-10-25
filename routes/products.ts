const express = require('express')
const faker = require('faker')
const router = express.Router()

router.get('/products', (req, res) => {
  const products = []
  const limit = req.query.limit || 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

router.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id: id,
    name: 'product',
    price: 1000
  })
})
