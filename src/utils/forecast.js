const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    
    const url = `http://api.weatherstack.com/current?access_key=d7db7f4b07bb222cc36847ec9840811e&query=${latitude},${longitude}&units=m`
    request( { url: url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (body.error){
            callback(body.error.info, undefined)
        } else {
            const temp = body.current.temperature
            const apperantTemp = body.current.feelslike
            const weatherDescription = body.current.weather_descriptions[0]
            callback(undefined, `${weatherDescription}. It is currently ${temp} degrees out and it feels like ${apperantTemp} degrees out.`)
        }
    })
}

module.exports = forecast