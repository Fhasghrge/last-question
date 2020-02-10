let express = require('express')
let  bodyParser = require('body-parser')
let router = require('./router')

let app = express()

// 开放资源
app.use('/public', express.static('../public/'))
app.use('/node_modules/', express.static('../node_modules/'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(3000, () => {
  console.log('runnning...')
}) 