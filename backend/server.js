const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 4000
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pollen', (req, res) => {
    api_helper.make_API_call('https://api.breezometer.com/pollen/v2/forecast/daily?lat=48.857456&lon=2.354611&days=3&key=BREEZO')
    .then(response =>{
        res.json(response)
    })
    .catch(error => {
        res.send('Pollen API not working')

    })
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 