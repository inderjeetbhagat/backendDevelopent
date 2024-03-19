/*Problem 6: Building a Basic API
Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather.
Create an Express.js route that responds with a JSON object containing the current temperature, conditions,
and city.
*/

const express = require('express');
const app = express();



app.get('/weather', (req, res) => {
    const weather = {
        "temp" : "25",
        "condition" : "windy",
        "city" : "Pune"
    };
    res.json(weather);
})

app.listen(3000);


