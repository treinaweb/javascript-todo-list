import { createNew } from "../repository/cardRepository.js";
import { listAllCards } from "../list/showCards.js";

async function addNewCard(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    if (taskTitle && taskDescription) {
        try {
            await createNew(taskTitle, taskDescription);

            await listAllCards();

            const createNewTaskModal = document.getElementById('new-card-modal');
            createNewTaskModal.close();

        } catch (error) {
            console.log(error);
        }
    }
}

export { addNewCard };
