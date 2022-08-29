import { render, screen } from "@testing-library/react"
import Candidates from "./Candidates"

test('renders Manage Candidates', () => {
    render(<Candidates />);
    const linkElement = screen.getByText(/Manage Candidates/i);
    expect(linkElement).toBeInTheDocument();
});