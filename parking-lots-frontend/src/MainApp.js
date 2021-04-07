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
        axios.get("http://e19b4ff53212.ngrok.io/parking-lots", config).then((response)=>{
            console.log("yelp backend res", response.data.data);
            setLowestLots(response.data.data);
        })
    }

    return(
        <div>
            <h1>Lowest rated parking lots!</h1>
            <h4>Ratings lower than 3 stars.</h4>
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" required placeholder="Enter a city" onChange={onChangeLocation}></input>
                    <input type="submit"></input>
                </form>
            </div>
            <ParkingLots lowestLots={lowestLots}></ParkingLots>
        </div>
    );
}