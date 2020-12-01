
const axios = require('axios');

const url = "https://api.twitter.com/1.1/search/tweets.json";
class Twitter{

   
    get(query, count){
        return  axios.get( url, {
            params: {
                q: query,
                count: count
            },
            headers: {
                "Authorization": "AAAAAAAAAAAAAAAAAAAAAPilJgEAAAAA67Wy01kjKkmwqDsr1mOK5YuBri4%3DF8NrnTX0w778boRKL2DFxRwLAk0EWuBNfsb0o9qNzzoY8PaI63"
            }
        })
    }
}

module.exports = Twitter;