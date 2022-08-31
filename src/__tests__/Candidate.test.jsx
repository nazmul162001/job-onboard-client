import { fireEvent, render, screen } from "@testing-library/react"
import Candidate from "../Pages/ManageDashboard/Candidates/Candidate"

test("handle onClick", () => {
    const onClick = jest.fn();
    render(<Candidate onClick={onClick} title="show detail" />);
    const buttonElement = screen.getByText(/Details/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1)
});