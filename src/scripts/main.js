import { PenPal } from "./penPal.js";
import { fetchAuthors, fetchRecipients, fetchTopics, fetchSent, fetchSubmissions, getSubmissions } from "./dataAccess.js"


const submissions = getSubmissions()
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchSubmissions()
        .then(() => fetchAuthors())
        .then(() => fetchRecipients())
        .then(() => fetchTopics())
        .then(() => fetchSent())
        .then(
            () => {
                mainContainer.innerHTML = PenPal()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)