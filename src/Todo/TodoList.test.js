import {
  render,
  screen,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";
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

test("delete target todo by click", () => {
  render(<TodoList />);
  const todoBtn1 = screen.getByTestId(1);
  fireEvent.click(todoBtn1);
  expect(todoBtn1).not.toBeInTheDocument();
  expect(screen.getByTestId(2)).toBeInTheDocument();
});

test("add new todo", () => {
  render(<TodoList />);
  const todoInput = screen.getByPlaceholderText("New Todo");
  todoInput.value = "Clean the dishes";
  const submitBtn = screen.getByText("Submit!");
  fireEvent.click(submitBtn);
  expect(screen.getByTestId(3)).toBeInTheDocument();
});

// test("prevent empty new todo submission", () => {
//   render(<TodoList />);
//   const alertMock = jest.spyOn(window, "alert").mockImplementation();
//   const submitBtn = screen.getByText("Submit!");
//   fireEvent.click(submitBtn);
//   expect(alertMock).toHaveBeenCalledTimes(1);
// });
