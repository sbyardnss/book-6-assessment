import { getAuthors, getTopics, getRecipients, getSent, getSubmissions } from "./dataAccess.js"


const authors = getAuthors()
const topics = getTopics()
const recipients = getRecipients()




// export const Authors = () => {

// }


export const SubmissionForm = () => {
    const authors = getAuthors()
    const topics = getTopics()
    const recipients = getRecipients()
    let html = `
        <div class="field">
            <label class="label" for="authors">Author</label>
            <select class="dropDowns" id="authorSelect">
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
            <textarea type="text" rows="20" name="letterMessage" class="input" id="messageInput" />Type letter here</textarea>

        </div>
        <div class="field" id="topicRadios">
            <label class="label" for="topics">Topics</label>
                <ul id="topicList">
            ${
                topics.map(
                    (topic) => {
                        return `<li>
                            <input type="radio" name="topics" value="${topic.id}" />${topic.subject}
                        </li>`
                        }
                ).join("")
            }
            </ul>
        </div>
        <div class="field">
            <label class="label" for="recipients">Recipient</label>
            <select class="dropDowns" id="recipientSelect">
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