const express = require('express')
const axios = require('axios').default;
const app = express()
const port = 4000
require('dotenv').config()
const API_KEY = process.env.BREEZO

app.get('/', (req, res) => {
  res.send('Hello World!')
})


var router = express.Router();


module.exports = router;

axios.get('https://api.breezometer.com/pollen/v2/forecast/daily?lat=48.857456&lon=2.354611&days=3&key=API_KEY')
.then((response) => {
    console.log(response.data);
    
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
