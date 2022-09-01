import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import RecruitmentRow from "../Pages/ManageDashboard/Recruitment/RecruitmentRow";

jest.mock("/useNavigate", () => {
    // useNavigate: jest.fn()
})

describe("Candidate data render", () => {
    describe("while loading", () => {
        it.todo("rebders a loader", () => {
            render(<RecruitmentRow />)
            expect(useNavigate).toHaveBeenNthCalledWith("addEmployees")
        });
    })

    describe("with data", () => {
        it.todo("renders the candidate data", () => {

        })
    })
})

test("handle onClick", () => {
    const onClick = jest.fn();
    render(<RecruitmentRow onClick={onClick} title="show detail" />);
    const buttonElement = screen.getByText(/Details/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1)
});

test("task-modal", () => {
    const onClick = jest.fn();
    render(<RecruitmentRow onClick={onClick} title="task-modal" />);
    const buttonElement = screen.getByText(/Details/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(0)
});