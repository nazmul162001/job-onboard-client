import { fireEvent, render, screen } from "@testing-library/react"
import { useParams } from "react-router-dom";
import SendMailCandidates from "../Pages/ManageDashboard/Recruitment/SendMailCandidates";



jest.mock("/useParams", () => {
    // useCandidate: jest.fn()
})

describe("Candidate data render", () => {
    describe("while loading", () => {
        it.todo("rebders a loader", () => {
            render(<SendMailCandidates />)
            expect(useParams).toHaveBeenNthCalledWith("candidate")
        });
    })

    describe("with data", () => {
        it.todo("renders the candidate data", () => {

        })
    })
})

test("email input should be rendered", () => {
    render(<SendMailCandidates />);
    const emailEl = screen.getByPlaceholderText(/Email/i);
    expect(emailEl).toBeInTheDocument()
})

test("Subject input should be rendered", () => {
    render(<SendMailCandidates />);
    const SubjectEl = screen.getByPlaceholderText(/Subject/i);
    expect(SubjectEl).toBeInTheDocument()
})

test("Send button should be rendered", () => {
    render(<SendMailCandidates />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument()
})

test("error should be displayed", () => {
    render(<SendMailCandidates />);
    const errorEl = screen.getByTestId("error.text");
    expect(errorEl).toBeVisible()
})

test("require should not be needed when input exist", () => {
    render(<SendMailCandidates />);
    const submitEl = screen.getByText(/Send/i);
    const emailEl = screen.getByPlaceholderText(/Email/i);
    const SubjectEl = screen.getByPlaceholderText(/Subject/i);

    const testValue = "test";

    fireEvent.change(emailEl, { target: { value: testValue } });
    fireEvent.change(SubjectEl, { target: { value: testValue } });

    expect(submitEl).not.toBeDisabled();
});
