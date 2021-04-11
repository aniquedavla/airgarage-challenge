import React, { useState } from 'react';
import axios from "axios"; 
import ParkingLots from './ParkingLots';

export default function MainApp(){
    const [locationSelected, setLocationSelected] = useState(null);
    const [lowestLots, setLowestLots] = useState(null);

    function onChangeLocation(event){
        let location = event.target.value;
        if(location) setLocationSelected(location);
    }
    
    function onSubmit(event){
        console.log("You are submitting data!!");
        getLowestParkingLots(locationSelected);
        event.preventDefault();
    }
    
    function getLowestParkingLots(location){
        const config = {
            params: {
                location: location
            }
        }
        axios.get("http://482c8be212b6.ngrok.io/parking-lots", config).then((response)=>{
            console.log("yelp backend res", response.data.data);
            setLowestLots(response.data.data);
        })
    }

    return(
        <div class="grid gap-4 bg-white-700">
            <h1 class="font-sans text-2xl mt-2 font-bold">Lowest rated parking lots!</h1>
            <div>Ratings lower than 3 stars.</div>
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" required placeholder="Enter a city" onChange={onChangeLocation}></input>
                    <input type="submit" class="bg-gray-200 p-2 ml-2"></input>
                </form>
            </div>
            <ParkingLots lowestLots={lowestLots}></ParkingLots>
        </div>
    );
}