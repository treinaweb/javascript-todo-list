import { getAll } from "../repository/cardRepository.js";
import { dragCardEvents } from "../events/dragCardEvents.js";
import { render } from "../create/createCardElement.js";
import { clearCards } from "../helpers.js";

async function listAllCards() {
    try {

        clearCards();

        const cards = await getAll();
        console.log(cards);

        cards.forEach((card) => {
            render(card)
            dragCardEvents();
        });
    } catch (error) {
        console.log(error);
    }
}

export { listAllCards };
