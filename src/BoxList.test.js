import React from "react";
import BoxList from "./BoxList";
import {fireEvent, render} from "@testing-library/react";

it("renders without crashing", ()=>{
    render(<BoxList />)
});

it("matches the snapshot", ()=>{
    const {asFragment}=render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", ()=>{
    const {getByLabelText, queryByText, queryAllByText} = render(<BoxList />);

    //there should only be 2 boxes prepopulated
    let boxButtons = queryAllByText("X");
    expect(boxButtons.length).toBe(2);

    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const colorInput = getByLabelText("Color:");
    const submitBtn = queryByText("Submit");

    fireEvent.change(widthInput, {target:{value:"100px"}});
    fireEvent.change(heightInput, {target:{value:"100px"}});
    fireEvent.change(colorInput, {target:{value:"yellow"}});
    fireEvent.click(submitBtn);

    boxButtons = queryAllByText("X");
    expect(boxButtons.length).toBe(3);

});

it("can delete a box", ()=>{
    const {queryAllByText} = render(<BoxList />);

    //there should only be 2 boxes prepopulated
    let boxButtons = queryAllByText("X");
    expect(boxButtons.length).toBe(2);

    fireEvent.click(boxButtons[0]);

    boxButtons = queryAllByText("X");
    expect(boxButtons.length).toBe(1);

    fireEvent.click(boxButtons[0]);

    boxButtons = queryAllByText("X");
    expect(boxButtons.length).toBe(0);

});