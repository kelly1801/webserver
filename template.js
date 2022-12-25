import express from 'express'
import * as url from 'url';
import hbs from 'hbs'
import * as dotenv from 'dotenv'

dotenv.config()
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express()
const port = process.env.PORT
// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//
app.use( express.static('public'))
app.get('/', (req, res) => {
    res.render('home', {
        name: 'Kelly Chara',
        title:'Learning Node '
    })
    
  })
  app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Kelly Chara',
        title:'Learning Node '
    })
    
  })
  app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Kelly Chara',
        title:'Learning Node '
    })
    
  })

  app.listen(port)