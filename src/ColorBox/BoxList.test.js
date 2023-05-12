import { render, screen, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders BoxList without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("displays initialState boxes", () => {
  render(<BoxList />);
  expect(screen.getByTestId(1)).toBeInTheDocument();
  expect(screen.getByTestId(2)).toBeInTheDocument();
});

test("delete target box by click", () => {
  render(<BoxList />);
  const box1 = screen.getByTestId(1);
  fireEvent.click(box1);
  expect(box1).not.toBeInTheDocument();
  expect(screen.getByTestId(2)).toBeInTheDocument();
});

test("submitting form creates new box with incrementing id", () => {
  render(<BoxList />);
  const color = screen.getByLabelText("Box Color:");
  const height = screen.getByLabelText("Box Height(px):");
  const width = screen.getByLabelText("Box Width(px):");
  color.value = "#000000";
  height.value = "50";
  width.value = "50";
  fireEvent.click(screen.getByText(`Add Box!`));
  expect(screen.getByTestId(3)).toBeInTheDocument();
});
