const express = require('express');
const Twitter = require('./api/helpers/twitter');
require('dotenv').config();

const twitter = new Twitter();

const app = express();
app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
const port = 5000;


app.get('/tweets', (req, res)=>{
    
    const query = req.query.q;
    const count = req.query.count;
    
    twitter.get(query,count)
    .then((response)=> {
      res.status(200).send(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
})

app.listen(port, ()=> console.log(`listening to port ${port}`));
