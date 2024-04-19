import { deleteById } from "../repository/cardRepository.js";

export async function deleteCard(itemId, cardToDelete) {
    try {
        await deleteById(itemId);

        cardToDelete.remove();
    } catch (error) {
        console.log(error);
    }
}
