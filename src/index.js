const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// http logger
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended:true
}
))
app.use(express.json())

//template engine
app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resours\\views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})