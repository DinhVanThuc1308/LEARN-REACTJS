import { fireEvent, render, screen } from "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import Counter from "../Couter";
// import Couter from "../couter.js";

// test("Couter component is rendered", () => {
//   render(<Couter />);
//   const btn = screen.getByText("Count");
//   expect(btn).toBeInTheDocument();
// });

test("check event click btn", () => {
  render(<Counter />);
  const btn = screen.getByText("Count");
  fireEvent.click(btn);
  const count = screen.getByText("1");
  expect(count.textContent).toContain("1");
});
