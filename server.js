const express = require('express');
const Twitter = require('./api/helpers/twitter');

const twitter = new Twitter();

const app = express();
const port = 5000;


app.get('/tweets', (req, res)=>{
    console.log(req.query)
    const query = req.query.q;
    const count = req.query.count;
    
    twitter.get(query,count).then ((response)=> {
       res.send(response.data);
    }).catch((error)=>{
        console.log(error);
    })

    res.send("Hello world")
    
})

app.listen(port, ()=> console.log(`listening to port ${port}`));
