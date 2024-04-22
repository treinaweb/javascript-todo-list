import { deleteById } from "../repository/cardRepository.js";
import { statusMessage } from "../snackbar.js";

export async function deleteCard(itemId, cardToDelete) {
    try {
        await deleteById(itemId);

        cardToDelete.remove();
        statusMessage("success", "Tarefa deletada com sucesso!");
    } catch (error) {
        statusMessage("error", error);
    }
}