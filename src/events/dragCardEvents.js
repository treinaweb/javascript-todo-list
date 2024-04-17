function dragCardEvents() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.setAttribute("data-card-index", index)
        card.addEventListener('dragstart', dragStart);
    });
}

function dragStart(event) {
    const cardIndex = event.target.getAttribute('data-card-index');
    event.dataTransfer.setData("text/plain", cardIndex);
}

export { dragCardEvents };
