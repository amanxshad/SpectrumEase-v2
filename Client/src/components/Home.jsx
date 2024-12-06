import React, { useEffect, useState } from "react";

function Home({ datas }){

    return(
        <div>
            <h2>Backend Data from Database:</h2>
            {   datas.length === 0 ? ( <div><h3>No record in database</h3></div>) : 
                (
                datas.map(data => (
                    <div key={data._id}> 
                        {data.color}-{data.colorOdd}
                    </div>
                ))
            )}
        </div>
    )
}

export default Home;