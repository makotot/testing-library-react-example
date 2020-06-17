import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Counter } from "./App";

test("Counter", () => {
  it("render counter as 0.", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("counter")).toHaveTextContent("0");
  });
  it("increment counter.", () => {
    const { getByTestId } = render(<Counter />);
    const increment = getByTestId("increment");
    expect(getByTestId("counter")).toHaveTextContent("0");
    fireEvent.click(increment);
    expect(getByTestId("counter")).toHaveTextContent("1");
  });
  it("decrement counter.", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("counter")).toHaveTextContent("0");
    const decrement = getByTestId("decrement");
    fireEvent.click(decrement);
    expect(getByTestId("counter")).toHaveTextContent("-1");
  });
  it("reset counter.", () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId("counter")).toHaveTextContent("0");
    const decrement = getByTestId("decrement");
    fireEvent.click(decrement);
    fireEvent.click(decrement);
    expect(getByTestId("counter")).toHaveTextContent("-2");
    const reset = getByTestId("reset");
    fireEvent.click(reset);
    expect(getByTestId("counter")).toHaveTextContent("0");
  });
});
