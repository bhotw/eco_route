import React from 'react';
import axios from 'axios';

export default function PollenInfo () {

    axios.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=48.857456&lon=2.354611&key=44534c49bb384ed982f3412ebf9439c2')
   .then((response =>{
    //console.log(response.data)
    
    const pollenData = response.data;
    console.log(pollenData);
    /*
<> 
    pollenData.map((item,index) => (
        <div key={index}>
            <div>{item.date}</div>
        </div> 
    ));
    </>
   */
    //this.setState({info});
    //setPollen(response.data + "..." + response.data.datetime);
   })
   )}
