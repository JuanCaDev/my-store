const express = require('express')
const faker = require('faker')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola')
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parámetros')
  }
})

app.get('categories/:id/products/:productId', (req, res) => {
  const { id, productId } = req.params

  res.json({
    id: id,
    productId: productId
  })
})

app.listen(port, () => {
  console.log('Escuchando en el puerto ' + port)
})
