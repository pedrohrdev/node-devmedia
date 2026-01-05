// 1- Preparing the express file and making it usable in our application.
const express = require('express');
const app = express();

let data = new Date();

let messageDay = require('./messageDay')

app.get('/', (req, res) => {

    let day = data.getDate();

    let selectedMessage = messageDay.returnMessageDay(day)

    res.json(
        {
            message: selectedMessage,
        }
    )

});


// 3 - Monitoring requests through the HTTP port
app.listen(8080, () => {
    console.log(`Node server started on ${data}`)
})