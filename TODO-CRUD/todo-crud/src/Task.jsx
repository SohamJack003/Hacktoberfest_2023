import React, { useState } from 'react';

const Tasky = (props) => {

    const [done, setDone] = useState(false);

    const handleClick = () => {
        setDone(!done);
    }

    return (
        <div style={{display : "flex", justifyContent  : "space-evenly", alignItems : "center"}}>
            <h2 style={{ color : done ? "#A6FF96" : "#000000", paddingRight : "2rem" }}>{props.taskName}</h2>
            <button onClick={handleClick} style={{marginRight : "2rem", width : "50px", height : "30px", borderRadius  :"10px"}}>Done</button>
            <button onClick={() => {props.deleteTask(props.id)}} style={{width : "50px", height : "30px", borderRadius  :"10px"}}> X </button>
        </div>
    );
}

export default Tasky;