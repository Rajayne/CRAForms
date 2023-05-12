import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders BoxList without crashing", () => {
  render(<TodoList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test("displays initialTodos", () => {
  render(<TodoList />);
  expect(screen.getByTestId(1)).toBeInTheDocument();
  expect(screen.getByTestId(2)).toBeInTheDocument();
});
