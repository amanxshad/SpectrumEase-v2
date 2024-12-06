import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Tracker() {
    const navigate = useNavigate();

    useEffect(()=>{
        const webgazer= window.webgazer
        webgazer.setGazeListener((data,clock)=>{
            console.log(data,clock)
        }).begin()
    },[]);
    return(
        <div>
        <button onClick={() => navigate('/')}>Back</button>
        <button onClick={() => navigate('/interface')}>Show Grid</button>
        </div>
    )
}

export default Tracker;