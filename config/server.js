const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000
const parentDir = path.resolve(__dirname, '..');

//app.use("/src", express.static('./src/'));

app.use("/src", express.static(path.join(parentDir + '/src/')));

app.get('/', (req,res) => { 
    res.sendFile(parentDir + '/index.html');
}); 

console.log(__dirname)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))