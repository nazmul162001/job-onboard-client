import { render, screen } from "@testing-library/react"
import RecruitmentCard from "../RecruitmentCard";

test('should render applicants', () => {
    render(<RecruitmentCard />);
    const recruitElement = screen.getByTestId('recuitment-1');
    expect(recruitElement).toBeInTheDocument();
})