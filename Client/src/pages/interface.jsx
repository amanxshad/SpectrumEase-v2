import React from "react";
import CircleGrid from "../components/circleGrid";
import { useData } from '../GlobalData';
import { useNavigate } from 'react-router-dom';

function Interface() {
    const navigate = useNavigate();
    const { datas } = useData();

    return(
        <div>
        <CircleGrid datas={datas}/>
        <button className="back" onClick={() => navigate('/')}>Back</button>
        </div>
    )
}

export default Interface;