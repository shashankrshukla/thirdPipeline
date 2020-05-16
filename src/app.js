const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

// this is the port number we listen to. For Heroku we use process.env.PORT variable and locally we use 3000
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to use
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Shashank Shukla',
        address: req.query.address
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Shashank Shukla'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is a help message',
        name: "Shashank Shukla"
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error })
         }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            // res.render('index', {
            //     title: 'Weather',
            //     forecast: forecastData,
            //     location: location
            // })

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {

    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    console.log(req.query)

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: "Shashank Shukla",
        errorText: 'Help article not found'
    })
})



app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: "Shashank Shukla",
        errorText: 'Page not found'
    })
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

