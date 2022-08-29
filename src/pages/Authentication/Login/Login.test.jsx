import { render, screen, fireEvent } from "@testing-library/react"

import Login from "./Login"

test("email input should be rendered", () => {
    render(<Login />);
    const emailEl = screen.getByPlaceholderText(/Your Email/i);
    expect(emailEl).toBeInTheDocument()
})

test("password input should be rendered", () => {
    render(<Login />);
    const PasswordEl = screen.getByPlaceholderText(/Password/i);
    expect(PasswordEl).toBeInTheDocument()
})

test("button input should be rendered", () => {
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument()
})

test("error should be displayed", () => {
    render(<Login />);
    const errorEl = screen.getByTestId("errors.email.message");
    expect(errorEl).toBeVisible()
})

test("require should not be needed when input exist", () => {
    render(<Login />);
    const submitEl = screen.getByText(/Login/i);
    const emailEl = screen.getByPlaceholderText(/Your Email/i);
    const PasswordEl = screen.getByPlaceholderText(/Password/i);

    const testValue = "test";

    fireEvent.change(emailEl, { target: { value: testValue } });
    fireEvent.change(PasswordEl, { target: { value: testValue } });

    expect(submitEl).not.toBeDisabled();
});