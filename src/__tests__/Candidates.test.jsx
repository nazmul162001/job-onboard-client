import { render } from "@testing-library/react"
import useCandidate from "../Hooks/useCandidate"
import Candidates from "../Pages/ManageDashboard/Candidates/Candidates"

jest.mock("/useCandidate", () => {
    // useCandidate: jest.fn()
})

describe("Candidates data render", () => {
    describe("while loading", () => {
        it.todo("rebders a loader", () => {
            render(<Candidates />)
            expect(useCandidate).toHaveBeenNthCalledWith("getApplicants")
        });
    })

    describe("with data", () => {
        it.todo("renders the candidate data", () => {

        })
    })
})