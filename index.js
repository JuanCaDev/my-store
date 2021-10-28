const express = require('express')
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const routerApi = require('./routes')

const app = express()
const port = 3000

app.use(express.json())

const whiteList = ['http://localhost:8080', 'https://myapp.co']
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options))

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

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
