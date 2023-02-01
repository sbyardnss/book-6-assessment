import { getAuthors, getRecipients, getSent, getSubmissions, getTopics, sendLetter } from "./dataAccess.js";

const listOfLetters = (obj) => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const topics = getTopics()
    const submissions = getSubmissions()
    let html = ""
    html += `<li>To ${obj.recipient}\n\n${obj.message}\n\nSincerely, ${obj.author}\n\n${obj.date}\n\n${obj.topic}
        <button class="deleteButton" id="delete--${obj.id}">Delete letter</button>
    </li>`
}

