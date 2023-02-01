const applicationState = {
    authors: [],
    recipients: [],
    submissions: [],
    topics: [],
    sent: []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")



//fetch the stuff
export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (writers) => {
                applicationState.authors = writers
            }
        )
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.recipients = data
            }
        )
}

export const fetchSubmissions = () => {
    return fetch(`${API}/submissions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.submissions = data
            }
        )
}

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.topics = data
            }
        )
}

export const fetchSent = () => {
    return fetch(`${API}/sent`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.sent = data
            }
        )
}


//get the stuff
export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const getSubmissions = () => {
    return applicationState.submissions.map(submission => ({...submission}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const getSent = () => {
    return applicationState.sent.map(sented => ({...sented}))
}