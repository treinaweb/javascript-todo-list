import { createNew } from "../repository/cardRepository.js";

async function addNewCard(event) {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    if (taskTitle && taskDescription) {
        try {
            await createNew(taskTitle, taskDescription);
        } catch (error) {
            console.log(error);
        }
    }
}

export { addNewCard };
