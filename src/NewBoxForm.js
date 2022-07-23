import React, {useState} from "react";

const NewBoxForm = ()=>{

    let[]
    return(
        <form>
            <label htmlFor="width"> Width: <input name="width" type="text"></input></label>
            <label htmlFor="height"> Height: <input name="height" type="text"></input></label>
            <label htmlFor="color"> Color: <input name="color" type="text"></input></label>
            <br></br>
            <button>Submit</button>
        </form>
    );
};

export default NewBoxForm;