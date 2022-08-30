import { render, screen, fireEvent } from "@testing-library/react"
import SignUp from "../Pages/Authentication/SignUp/SignUp";

test("name input should be rendered", () => {
    render(<SignUp />);
    const nameEl = screen.getByPlaceholderText(/Your Name/i);
    expect(nameEl).toBeInTheDocument()
})

test("email input should be rendered", () => {
    render(<SignUp />);
    const emailEl = screen.getByPlaceholderText(/Your Email/i);
    expect(emailEl).toBeInTheDocument()
})

test("password input should be rendered", () => {
    render(<SignUp />);
    const PasswordEl = screen.getByPlaceholderText(/Password/i);
    expect(PasswordEl).toBeInTheDocument()
})

test("button input should be rendered", () => {
    render(<SignUp />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument()
})

test("error should be displayed", () => {
    render(<SignUp />);
    const errorEl = screen.getByTestId("errors.email.message");
    expect(errorEl).toBeVisible()
})

test("require should not be needed when input exist", () => {
    render(<SignUp />);
    const submitEl = screen.getByText(/Sign Up/i);
    const emailEl = screen.getByPlaceholderText(/Your Email/i);
    const PasswordEl = screen.getByPlaceholderText(/Password/i);

    const testValue = "test";

    fireEvent.change(emailEl, { target: { value: testValue } });
    fireEvent.change(PasswordEl, { target: { value: testValue } });

    expect(submitEl).not.toBeDisabled();
});