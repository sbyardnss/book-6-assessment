import { SubmissionForm } from "./submissionForm.js"


export const PenPal = () => {
    let html = `
    <h1>Pen Pal Society</h1>
    <section class="submissionForm">
        ${SubmissionForm()}
    </section>
    <section class="sentLetters">
    
    </section>
    `
    return html
}