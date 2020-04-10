const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?lon=' + longitude + '&lat=' + latitude + '&appid=34fc715e69ee9f105604ca2d8a3c354b&units=metric&lang=en'

    request({ url, json: true }, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.message) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.weather[0].description + '. It is currently ' + body.main.temp + ' degrees and the pressure is ' + body.main.pressure + ' hPa. Humidity is ' + body.main.humidity)
        }
    })
}

module.exports = forecast