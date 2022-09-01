import { fireEvent, render, screen } from "@testing-library/react";
import { useQuery } from "react-query/build/cjs/packages/react-query/src";
import AllJob from "../Pages/Jobs/AllJob/AllJob";


jest.mock("/useQuery", () => {
    // useQuery: jest.fn()
})

describe("Candidates data render", () => {
    describe("while loading", () => {
        it.todo("rebders a loader", () => {
            render(<AllJob />)
            expect(useQuery).toHaveBeenNthCalledWith("data")
        });
    })

    describe("with data", () => {
        it.todo("renders the candidate data", () => {

        })
    })
})

test("event onClick", () => {
    const onClick = jest.fn();
    render(<AllJob onClick={onClick} title="searchHandle" />);
    const buttonElement = screen.getByText(/searchHandle/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1)
});