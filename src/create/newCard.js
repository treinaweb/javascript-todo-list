import { createNew } from "../repository/cardRepository.js";
import { listAllCards } from "../list/showCards.js";
import { clearForm } from "../helpers.js";
import { statusMessage } from "../snackbar.js";

async function addNewCard(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const createNewTaskModal = document.getElementById("new-card-modal");
    if (taskTitle && taskDescription) {
        try {
            await createNew();

            statusMessage(
                "success",
                `Tarefa <i>${taskTitle}</i>, criada com sucesso!`
            );

            await listAllCards();

            createNewTaskModal.close();

            clearForm();
        } catch (error) {
            statusMessage("error", error);
            clearForm();
            createNewTaskModal.close();
        }
    }
}

export { addNewCard };
