import React, {useState} from "react";

const NewBoxForm = ({addNewBox})=>{

    const INITIAL_STATE = {
        width:"",
        height:"",
        color:"",
    };

    let[formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(fData => ({
            ...fData,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewBox(formData);
        setFormData(INITIAL_STATE);
    };

    return(
        <form>
            <label htmlFor="width">Width:</label>
            <input name="width" id="width" type="text" onChange={handleChange} value={formData.width}></input>
            <label htmlFor="height">Height:</label>
            <input name="height" id="height" type="text" onChange={handleChange} value={formData.height}></input>
            <label htmlFor="color">Color:</label>
            <input name="color" id="color" type="text" onChange={handleChange} value={formData.color}></input>
            <br></br>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default NewBoxForm;