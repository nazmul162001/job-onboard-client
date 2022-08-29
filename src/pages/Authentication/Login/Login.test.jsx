import { render, screen } from "@testing-library/react"

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