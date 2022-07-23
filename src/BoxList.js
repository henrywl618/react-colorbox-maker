import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = ()=> {

    const startingBoxes = [{width:"100px",height:"100px",color:"green"},
                           {width:"75px",height:"75px",color:"blue"}]
    let [boxes, setBoxes] = useState(startingBoxes);

    return(
        <>
        <NewBoxForm />
        {startingBoxes.map(box => <Box width={box.width} height={box.height} color={box.color} />)}
        </>
    );
};

export default BoxList;