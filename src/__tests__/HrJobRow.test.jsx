import { fireEvent, render, screen } from "@testing-library/react"
import HrJobRow from "../Pages/ManageDashboard/HrJob/HrJobRow";

test("editJobs button modal", () => {
    render(<HrJobRow />);

    const divElement = screen.getByRole("contentinfo")
    const lebelElement = screen.getByText("modal-toggle")

    fireEvent.click(lebelElement);

    expect(divElement).toHaveTextContent("modal is open")
});


test("handle Update Now button", () => {
    const onClick = jest.fn();
    render(<HrJobRow onClick={onClick} title="Update Now" />);
    const buttonElement = screen.getByText(/Update Now/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1)
});