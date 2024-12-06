import React, {useState, useEffect} from "react";
import Home from "../components/Home";
import { useData } from '../GlobalData';
import axios from 'axios';

function CrudData(){
    const { datas, setDatas } = useData();
    const [color, setColor] = useState('');
    const [colorOdd, setOddcolor] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3000/get')
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err));
    }, [setDatas]);


    const addColor = (newColor, newColorOdd) => {
        axios.post('http://localhost:3000/add', { color: newColor, colorOdd: newColorOdd })
        .then((result) => {
            setDatas((prevDatas) => [...prevDatas, result.data]);
        })
        .catch((err) => console.log(err));
    };

    return(
        <div>
            <Home datas={datas} setDatas={setDatas} />

            <input
            type='text'
            placeholder='Enter color code'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            />

            <input
            type='text'
            placeholder='Enter odd color code'
            value={colorOdd}
            onChange={(e) => setOddcolor(e.target.value)}
            />

            <button onClick={() => addColor(color, colorOdd)}>Add Color</button>
        </div>
    )
}

export default CrudData