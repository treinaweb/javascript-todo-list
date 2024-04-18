const form = document.forms["addNewCard"];

function createCardEvents() {
    const newCardTrigger = document.getElementById("new-card-trigger");
    const newCardModal = document.getElementById("new-card-modal");

    newCardTrigger.addEventListener("click", () => {
        newCardModal.showModal();
    });

    const closeNewCardModal = document.querySelector(".close-new-card-modal");
    closeNewCardModal.addEventListener("click", () => {
        newCardModal.close();
    });
}

export { createCardEvents };
