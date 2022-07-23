import React from "react";
import {render} from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", ()=>{
    render(<Box width='100px' height='100px' color='black' />);
});

it("matches the snapshot", ()=>{
    const { asFragment } =  render(<Box width='100px' height='100px' color='black' />);
    expect(asFragment()).toMatchSnapshot();
});