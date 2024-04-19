function myFetch(path, options = {}) {
    const defaultHeaders = {
        "Content-Type": "application/json",
    };

    const mergedOptions = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    let url = `https://alunos.treinaweb.com.br/twtodos/api/v1/${path}`;

    return fetch(url, mergedOptions);
}

function clearCards() {
    const cardsContainer = document.querySelectorAll(".cards-container");
    cardsContainer.forEach(cardContainer=> {
        cardContainer.innerHTML = "";
    }) 
}

function clearForm() {
    const form = document.forms["addNewCard"];
    const formInputs = form.querySelectorAll('input');

    formInputs.forEach(input => {
        input.value = "";
    })
}

export { myFetch, clearCards, clearForm };
