import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("increments count when button is clicked", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.click(screen.getByText("Increment count number"));

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
