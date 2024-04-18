import { closeModal, openModal } from "./modalEvents.js";

const form = document.forms["addNewCard"];

function createCardEvents() {
    const newCardTrigger = document.getElementById("new-card-trigger");
    const newCardModal = document.getElementById("new-card-modal");
    openModal(newCardTrigger, newCardModal);

    const closeNewCardModal = document.querySelector(".close-new-card-modal");
    closeModal(closeNewCardModal, newCardModal);
}

export { createCardEvents };
