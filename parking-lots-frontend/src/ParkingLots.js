import React from 'react';

export default function ParkingLots({lowestLots}){
    
    if(!lowestLots){
        return (<h1>Searching for entered city...</h1>);
    } else {
        return (
            <div class="grid grid-cols-3 gap-6 items-center ml-2 mr-2">
                {lowestLots && lowestLots.map((lot)=>{
                    return (
                        <div class="mx-auto bg-gray-100 rounded-lg p-2" key={lot.name}>
                            <h1 class="font-bold">{lot.name}</h1>
                            <div class="flex flex-row items-center pl-4 mt-1"> 
                                <img width="200px" height="200px" src={lot.image_url} alt="lot image"></img>
                                <div class="text-left pl-2">
                                    <h4><span class="font-semibold">Address: </span>{lot.location.address1}</h4>
                                    <h4><span class="font-semibold">Rating: </span>{lot.rating}</h4>
                                    <h4><span class="font-semibold">Score: </span>{lot.score.toFixed(3)}</h4>
                                    <h4><span class="font-semibold">Review count: </span>{lot.review_count}</h4>
                                </div>
                            </div>
                            <h4><span class="font-semibold mt-1">Yelp page: </span><a class="break-all text-blue-500" href={lot.url} target="_blank">{lot.url}</a></h4>
                        </div>
                    );
                })}
            </div>
        );
    }
}