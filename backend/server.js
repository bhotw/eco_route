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

axios.get("https://api.breezometer.com/pollen/v2/forecast/daily?lat="+lat+"&lon="+lon+"&days=3&key=44534c49bb384ed982f3412ebf9439c2")
.then((response) => {
    console.log(response.data);

    
});
app.get('/', (req, res) => {
  res.send(response.data)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 



// const request = require('request');
// request('https://thezipcodes.com/api/v1/search?zipCode=zip_code&countryCode=US&apiKey=3bbcefb8b4912d2f67f5bc8cf37d9dbb', { json: true }, (err, res, body) => {
// 	if (err) { return console.log(err); }
//     console.log(body);
// });

zip_code = 11373
function getLanAndLong(zip_code){

  axios.get("https://thezipcodes.com/api/v1/search?zipCode="+zip_code+"&countryCode=US&apiKey=3bbcefb8b4912d2f67f5bc8cf37d9dbb").then(response => {
    // const latitude = data.resualt.geometry.location.lat;
    // const longitude = data.resualt.geometry.location.lng;
    console.log(response.data);
  });

}
getLanAndLong(10305)