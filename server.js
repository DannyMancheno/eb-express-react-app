const express = require('express');
const app = express();

const PORT = process.env.HTTP_PORT || 4001;

app.get('/', (req, res)=>{
    res.send("Hello world - express '/' route");
})

app.get('/flower', (req, res)=>{
    res.send({
        name: 'Dandelion',
        color: 'blue-ish'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`)
})



