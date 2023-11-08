import { saveToLS, loadFromLS } from "./helpers";
import throttle from "lodash.throttle";

const refs = {
    formElem: document.querySelector(".feedback-form"),
}
refs.formElem.addEventListener("input",
    throttle(
    onFormInput
    , 500)
)
refs.formElem.addEventListener("submit", onFormSubmit)
function onFormInput(event) {

//     const key = 'feedback-form-state'
//     const value = {
//         eventName: event.target.name,
//         eventValue: event.target.value,
// }



    const key = event.target.name;
    const value = event.target.value;
    saveToLS(key, value)
}
function onFormSubmit(event) {
    event.preventDefault();
    const object = {
        // 'feedback-form-state': {
            email: refs.formElem.elements.email.value,
            message: refs.formElem.elements.message.value,
        // }
    };

    console.log(object);
    event.target.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    // localStorage.removeItem('feedback-form-state');
}
function onLoad() {
    const email = loadFromLS('email');
    const message = loadFromLS('message')

    refs.formElem.elements.email.value = email;
    refs.formElem.elements.message.value = message;
}
onLoad()

