import { getAuthors, getRecipients, getSent, getSubmissions, getTopics, sendLetter } from "./dataAccess.js";
import { getSelectedTopics } from "./submissionForm.js"


// export const listOfLetters = () => {
//     const authors = getAuthors()
//     const recipients = getRecipients()
//     const topics = getTopics()
//     const submissions = getSubmissions()
//     let html = `
    
//     ${
//     submissions.map(
//         (sentLetter) => {
//             return `<li>To ${sentLetter.recipientId}
//             ${sentLetter.letter}
//             Sincerely, ${sentLetter.authorId}
//             ${sentLetter.date}
//             ${sentLetter.topicId}
//     </li>`
//     })
//     }
//     `
//     return html
// }


// const authors = getAuthors()
// const recipients = getRecipients()
// const topics = getTopics()


const convertAuthorId = (obj) => {
    const authors = getAuthors()
    let chosenAuthor = null
    for (const author of authors) {
        if (obj.authorId === author.id) {
            chosenAuthor = author
        }
    }
    return chosenAuthor.name
} 


const convertRecipientId = (obj) => {
    const recipients = getRecipients()
    let chosenRecipient = null
    for (const recipient of recipients) {
        if (obj.recipientId === recipient.id) {
            chosenRecipient = recipient
        }
    }
    return chosenRecipient.name
}



// OLD VERSION FOR POPULATING TOPICS
// const convertTopicId = (obj) => {
//     const topics = getTopics()
//     let chosenTopics = null;
//     for (const topic of topics) {
//         if (obj.topicId === topic.id) {
//             chosenTopics = topic
//         }
//     }
//     return chosenTopics.subject
// }




const convertTopicArray = (obj) => { 
    const topics = getTopics()
    let html = "<ul>\n"
    for (const topic of topics) {
        for (const item in obj.topicIds) {
            if (item === parseInt(topic.id)) {
                html += `<li><span class="topicSpan">${topic.name}</span></li>`
            }
        }
    }
    html += "</ul>"
    return html
}


export const Letters = () => {
    const submissions = getSubmissions()
    //To RECIPIENT MESSAGE Sincerely AUTHOR TOPICS
    
    let html = `
    <ul id="oldLetters">
    ${
        submissions.map(
            submission => {
                return `<li class="letterListItem">
                    <div>To ${convertRecipientId(submission)},</div>
                    <p>${submission.letter}</p>
                    <div class="letterListSignOff">Sincerely,\n 
                    ${convertAuthorId(submission)}</div>
                    <div>${convertTopicArray(submission)}</div>
                    </li>`
                }).join("")
            }
            </ul>`
            return html
        }
        // <div><span class="topicSpan">${convertTopicId(submission)}</span></div>