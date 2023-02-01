import { getAuthors, getTopics, getRecipients, getSent, getSubmissions } from "./dataAccess.js"


const authors = getAuthors()
const topics = getTopics()
const recipients = getRecipients()




// export const Authors = () => {

// }


export const SubmissionForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="authors">Author</label>
            <select class="authors" id="authorSelect">
                <option value="0">Choose author</option>
                ${
                    authors.map(
                        (author) => {
                            return `<option value="${author.id}">${author.name}</option>`
                        }
                    ).join("")
                }
            </select>
        </div>
        <div class="field">
            <label class="label" for="letterMessage">Letter</label>
            <input type="text" name="letterMessage" class="input" id="messageInput" />
        </div>
        <div class="field" id="topicRadios">
            <label class="label" for="topics">Topics</label>
                <ul>
            ${
                topics.map(
                    (topic) => {
                        return `<li>
                            <input type="radio" name="topics" value="${topic.id}" />${topic.subject}
                        </li>`
                        }
                )
            }
            </ul>
        </div>
        <div class="field">
            <label class="label" for="recipients">Recipient</label>
            <select class="recipients" id="recipientSelect">
                <option value="0">Choose recipient</option>
                ${
                    recipients.map(
                        (recipient) => {
                            return `<option value="${recipient.id}">${recipient.name}</option>`
                        }
                    ).join("")
                }
            </select>
        </div>
        <button class="button" id="sendButton">Send Letter</button>
        `
        return html

}