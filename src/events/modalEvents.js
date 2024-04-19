function openModal(actionTrigger, modal) {
    actionTrigger.addEventListener("click", () => {
        modal.showModal();
    });
}

function closeModal(actionTrigger, modal) {
    actionTrigger.addEventListener("click", () => {
        modal.close();
    });
}

function showDeleteModalEvent() {
    getDeleteModal.showModal();
}

function getDeleteModal() {
    return document.querySelector("#delete-confirm");
}

export { openModal, closeModal, showDeleteModalEvent };
