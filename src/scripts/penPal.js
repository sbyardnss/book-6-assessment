import { Letters } from "./letter.js"
import { SubmissionForm } from "./submissionForm.js"


export const PenPal = () => {
    let html = `
    <h1>Pen Pal Society</h1>
    <section class="submissionForm">
        ${SubmissionForm()}
    </section>
    <section class="sentLetters">
    <h2>Sent Letters</h2>
        ${Letters()}
    </section>
    `
    return html
}