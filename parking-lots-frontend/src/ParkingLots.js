import React from 'react';

export default function ParkingLots({lowestLots}){
    
    if(!lowestLots){
        return (<h1>Searching for entered city...</h1>);
    } else {
        return (
            <div>
                {lowestLots && lowestLots.map((lot)=>{
                    return (
                        <div key={lot.name}>
                            <h1>{lot.name}</h1>
                            <img width="200px" height="200px" src={lot.image_url} alt="lot image"></img>
                            <h4>Address: {lot.location.address1}</h4>
                            <h4>Rating: {lot.rating}</h4>
                            <h4>Score: {lot.score}</h4>
                            <h4>Review count: {lot.review_count}</h4>
                            <h4>Yelp page: <a href={lot.url} target="_blank">{lot.url}</a></h4>
                        </div>
                    );
                })}
            </div>
        );
    }
}