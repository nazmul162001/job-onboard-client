import { fireEvent, render, screen } from "@testing-library/react"
import HrJobRow from "../Pages/ManageDashboard/HrJob/HrJobRow";

test("editJobs button modal", () => {
    render(<HrJobRow />);

    const divElement = screen.getByRole("contentinfo")
    const lebelElement = screen.getByText("modal-toggle")

    fireEvent.click(lebelElement);

    expect(divElement).toHaveTextContent("modal is open")
});