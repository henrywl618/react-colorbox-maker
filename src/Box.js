import React from "react";
import "./Box.css";

const Box = ({width,height,color,id, removeBox})=>{
    const boxStyle = {
        width: width,
        height: height,
        backgroundColor: color,
        id: id,
    };
    return (
    <>
        <div key={id} className="Box" style={boxStyle}></div>
        <button className="Box-button" onClick={removeBox}>X</button>

    </>
    )
};

export default Box;