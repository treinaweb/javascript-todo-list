import { deleteCard } from "../delete/deleteCard";
import { showDeleteModalEvent } from "./modalEvents";

function deleteCardEvents() {
    const buttonsDeleteCard = document.querySelectorAll(".delete-item");

    buttonsDeleteCard.forEach((button) => {
        button.addEventListener("click", async () => {
            showDeleteModalEvent();

            const confirmDeleteButton =
                document.querySelector("#confirm-delete");
            let onDeleteCard = confirmDeleteButtonEvent(
                button,
                confirmDeleteButton
            );
        });
    });
}

function confirmDeleteButtonEvent(button, confirmDeleteButton) {
    let deleteCardFn = async () => {
        const itemId = button.getAttribute("id");

        let cardToDelete = document.getElementById(itemId);
        deleteCard(itemId, cardToDelete);

        confirmDeleteButton.removeEventListener("click", deleteCardFn);
    };
    confirmDeleteButton.addEventListener("click", deleteCardFn);

    return deleteCardFn;
}
