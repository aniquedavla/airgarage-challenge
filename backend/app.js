const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001; 
const API_KEY = "TjIqjD8w7OOa5L6tReeHIROTTq1urLeKT4AcopeD1WWWUj7BzGsQavEUkbp-aSk0ei-RcSHmrcwM8X8KYlSd8YioTr_kKqArl6vTU0jMCPOoEXNzb55xfG7v6o1rYHYx"; 

app.get('/parking-lots', (req, res) => {
    console.log("location requested", req.query.location);
    let locationRequested = req.query.location;
    let config = {
        headers: {
            "Authorization": `Bearer ${API_KEY}`, 
            "Content-type": "application/json"
        }, 
        params: {
            term: "parking lots", 
            location: locationRequested ? locationRequested : "San Francisco", 
            sort_by: "rating", 
            limit: 50
        }
    };
    try{
        axios.get("https://api.yelp.com/v3/businesses/search", config).then((data)=>{
            let parkingLots = data.data.businesses;

            if(parkingLots.length <= 1 ) return res.json({data: parkingLots});
            
            let sortedLots = parkingLots.sort((obj1, obj2)=>{
                return obj1.rating - obj2.rating;
            });
            let lowestLots = sortedLots.filter((obj)=>{
                return obj.rating < 3;
            }); 
            let scoredLowestLots = lowestLots.map((lot)=>{
                // score = ( number of reviews * rating ) / (number of reviews + 1)
                let numOfReviews = lot.review_count;
                let rating = lot.rating;
                let score = (numOfReviews * rating) / (numOfReviews + 1);
                lot["score"] = score;
                return lot;
            })
            return res.json({data: scoredLowestLots});
        });
    } catch (e) {
        return res.json({error: e.message});
    }
});



app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})