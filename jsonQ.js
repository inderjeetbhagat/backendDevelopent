// Problem 5: JSON (JavaScript Object Notation)
//  You're working on a weather app. Create a JSON object representing the weather forecast for
//  a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
//  Display the information using console.log.
//  Remember to encourage your students to experiment and think creatively while solving these
//  problems. They can use the concepts you've taught them to come up with their own solutions.
//  This will not only help solidify their understanding but also foster their problem-solving skills in
//  JavaScript

let weather = {
    "date": "17/03/24",
    "temp": "18",
    "conditions": "windy",
    "humidity": "low"
};

let weatherString = JSON.stringify(weather);
let parsedWeather = JSON.parse(weatherString)

console.log(weather.temp);