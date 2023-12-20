const express = require('express')
const app = express()
const fs = require('fs');
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('<h1>Hellbo World</h1>');
//   });    

// GET request to the root of the app 
app.get('/', (req,res) => { 
  
    // Sending index.html file for GET request 
    // to the root of the app 
    res.sendFile(__dirname + '/index.html');
}); 

console.log(__dirname)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))