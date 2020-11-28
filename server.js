import express from 'express';
import axios from 'axios';

const app = express();
const port = 5000;






app.get('/tweets', (req, res)=>{
    console.log(req.query)
    const query = req.query.q;
    const count = req.query.count;
    const url = "https://api.twitter.com/1.1/search/tweets.json";
    axios.get(url, {
        params: {
            q: query,
            count: count
        },
        headers: {
            "Authorization": "AAAAAAAAAAAAAAAAAAAAAPilJgEAAAAA67Wy01kjKkmwqDsr1mOK5YuBri4%3DF8NrnTX0w778boRKL2DFxRwLAk0EWuBNfsb0o9qNzzoY8PaI63"
        }
    }).then ((response)=> {
        res.status(200).send(response.data)
    }).catch((err)=>{
       res.status(400).send(err);
    })
    

    res.send("Hello world")
})

app.listen(port, ()=> console.log(`listening to port ${port}`));
