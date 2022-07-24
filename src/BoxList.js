import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';


const BoxList = ()=> {

    const startingBoxes = [{width:"100px",height:"100px",color:"green", id:uuid()},
                           {width:"75px",height:"75px",color:"blue", id:uuid()}]
    let [boxes, setBoxes] = useState(startingBoxes);

    const addNewBox = (formData)=>{
        setBoxes(currentBoxes => (
            [...currentBoxes,{...formData, id:uuid()}]
        ));
    }; 

    const removeBox = (id) => {
        setBoxes(currentBoxes => {
            let copy = currentBoxes.filter(box => box.id !== id);
            return copy
        });
    };

    return(
        <>
        <NewBoxForm addNewBox={addNewBox}/>
        {boxes.map(box => <Box width={box.width} height={box.height} color={box.color} id={box.id} removeBox={()=>removeBox(box.id)} />)}
        </>
    );
};

export default BoxList;