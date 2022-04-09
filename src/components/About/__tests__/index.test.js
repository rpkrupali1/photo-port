import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";
const { asFragment } = render(<About />);

afterEach(cleanup);

describe("About components", () => {
  //render about tests
  // verify that the component is rendering
  it("renders", () => {
    render(<About />);
  });

  //compare snapshot versions of the DOM node structure
  it("matches snapshot DOM node structure", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
