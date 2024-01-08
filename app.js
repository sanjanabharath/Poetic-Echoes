const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const { engine } = require('express-handlebars');
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')

dotenv.config({path: './config/config.env'})
require('./config/passport')(passport)


connectDb()

const app = express()
const PORT = process.env.PORT || 5000


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.engine('.hbs', engine({defaultLayout: 'main',extname: '.hbs', partialsDir  : [
    path.join(__dirname, 'views/partial'),
]}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})