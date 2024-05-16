import React from "react";
import { render } from "@testing-library/react";
import HomePage from "../app/page";
import { expect } from "chai";

describe("HomePage", () => {
  it("renders correctly", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Welcome to my app"));
  });
});
