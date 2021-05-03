const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWZ0YWJ1ZGRpbnNhYmJpciIsImEiOiJja215ejVhMW8wOHRsMnVvNG9seWUya216In0.w4EoYj23wusdgIR8L5n5Yg'
    request({url: url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode