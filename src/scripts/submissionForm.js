import { getAuthors, getTopics, getRecipients, getSent, getSubmissions, sendLetter } from "./dataAccess.js"


// const authors = getAuthors()
// const topics = getTopics()
// const recipients = getRecipients()




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
                            return `<option id="authorName" name="${author.name}" value="${author.id}">${author.name}</option>`
                        }
                    ).join("")
                }
            </select>
        </div>
        <div class="field">
            <label class="label" for="letterMessage">Letter</label>
            <textarea type="text" rows="20" name="letterMessage" class="input" id="messageInput" /></textarea>

        </div>
        <div class="field" id="topicRadios">
            <label class="label" for="topics">Topics</label>
                <ul id="topicList">
            ${
                topics.map(
                    (topic) => {
                        return `<li class="topicListItem">
                            <input type="checkbox" id="topic" name="checkbox" value="${topic.id}" />${topic.subject}
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
                            return `<option id="recipientName" name="${recipient.name}" value="${recipient.id}">${recipient.name}</option>`
                        }
                    ).join("")
                }
            </select>
        </div>
        <button class="button" id="sendButton">Send Letter</button>
        `
        return html

}


//event listeners for author, recipient and topic

let selectedAuthorId = null;
let selectedRecipientId = null;


document.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "authorSelect") {
            selectedAuthorId = parseInt(changeEvent.target.value)
        }
    }
)

document.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "recipientSelect") {
            selectedRecipientId = parseInt(changeEvent.target.value)
        }
    }
)
/*

let selectedTopics = []
document.addEventListener(
    "change",
    event => {
        if (event.target.id === "topic") {
            selectedTopics.push(parseInt(event.target.value))
        }
    }
)
export const getSelectedTopics = () => {
    return selectedTopics.map(topic => ({...topic}))
}
*/


/*

//OLD VERSION FOR SELECTING SINGLE TOPIC
let selectedTopicId = null;

document.addEventListener(
    "change",
    changeEvent => {
        if (changeEvent.target.id === "topic") {
            selectedTopicId = parseInt(changeEvent.target.value)
        }
    }
)
*/


/*
//code for creating object to send to API
const mainContainer = document.querySelector("#container")
mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "sendButton") {
            const messageValue = document.getElementById("messageInput").value
            const dateValue = new Date().toDateString()
            const dataToSendToAPI = {
                authorId: selectedAuthorId,
                recipientId: selectedRecipientId,
                letter: messageValue,
                // topicId: selectedTopicId,
                topicIds: selectedTopics,
                date: dateValue
            }
            sendLetter(dataToSendToAPI)
        }
    }
)
*/

//updated version from wesley. make sure you understand the query selector topics code on line 160
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendButton") {
        // Get what the user typed into the form fields
        //BE AWARE OF WHICH IDS ARE USED FOR THESE. IT IS THE ID FOR THE WHOLE DROPDOWN. NOT THE ID OF EACH OPTION
        const userAuthor = parseInt(document.querySelector("#authorSelect").value)
        const userRecipient = parseInt(document.querySelector("#recipientSelect").value)


        //THIS IS YOUR VERSION OF THE AUTHOR/RECIPIENT SELECTIONS THAT USES THE EVENT LISTENERS ABOVE
        // const userAuthor = selectedAuthorId
        // const userRecipient = selectedRecipientId
        const userTopics = document.querySelectorAll("input[type='checkbox']:checked")
        let userTopicsArray = []
        userTopics.forEach((topic) => {
            userTopicsArray.push(parseInt(topic.value))
        })
        const userTopic = userTopicsArray
        const userBody = document.querySelector("#messageInput").value
        const userDate = new Date().toLocaleDateString()


        const dataToSendToAPI = {
            authorId: userAuthor,
            recipientId: userRecipient,
            topicIds: userTopic,
            letter: userBody,
            date: userDate
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})

/*
//code for creating object to send to API
const mainContainer = document.querySelector("#container")
mainContainer.addEventListener(
    "click",
    clickEvent => {
        if (clickEvent.target.id === "sendButton") {
            clickEvent.preventDefault();
            const authorId = parseInt(document.querySelector(`#authorName`).value)
            const recipientId = parseInt(document.querySelector(`#recipientName`).value)
            const messageValue = document.getElementById("messageInput").value
            const topicId = parseInt(document.querySelector(`#topic`).value)
            const dateValue = new Date().toDateString()

            const dataToSendToAPI = {
                authorId: authorId,
                recipientId: recipientId,
                letter: messageValue,
                topicId: topicId,
                date: dateValue
            }
            sendLetter(dataToSendToAPI)
        }
    }
)

*/