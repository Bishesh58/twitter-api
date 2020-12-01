const express = require('express');
const Twitter = require('./api/helpers/twitter');
require('dotenv').config();

const twitter = new Twitter();

const app = express();
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
const port = 5000;


app.get('/tweets', (req, res)=>{
    console.log(req.query)
    const query = req.query.q;
    const count = req.query.count;
    
    twitter.get(query,count).then ((response)=> {
      console.log(response.data);
    }).catch((error)=>{
        console.log(error);
    })

    res.send("Hello world")
    
})

app.listen(port, ()=> console.log(`listening to port ${port}`));
