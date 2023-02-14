import { cleanup, render, screen } from "@testing-library/react"
import Text from "./Text"
import "@testing-library/jest-dom"


afterEach(() => {
    cleanup()
})

describe("Text test", () => {
    test('Render Text Component', () => {
        render(<Text toggle={true} displayTxt="displayTxt" />)

        const text = screen.getByTestId("text")

        expect(text).toBeInTheDocument()
    })
})