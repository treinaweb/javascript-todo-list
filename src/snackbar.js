export function statusMessage(type, message, time = 5000) {
    let containerMessage = document.getElementById(type);
    let typeMessage = containerMessage.querySelector(`#${type}-message`);

    typeMessage.innerHTML = message;
    containerMessage.classList.add("show");

    setTimeout(function () {
        containerMessage.classList.remove("show");
        typeMessage.innerHTML = "";
    }, time);
}
