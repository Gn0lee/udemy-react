import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as as text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was Not clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("It's good to see you!", {
      exact: true,
    });

    expect(outputElement).toBeInTheDocument();
  });

  test("render Changed if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!", {
      exact: true,
    });

    expect(outputElement).toBeInTheDocument();
  });

  test("not render good to see you if button clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });
});
