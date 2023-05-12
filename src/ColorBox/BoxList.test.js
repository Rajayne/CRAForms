import { render, screen } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders BoxList without crashing", () => {
  render(<BoxList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
