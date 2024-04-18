let url = "https://alunos.treinaweb.com.br/twtodos/api/v1/todos";

async function getAll() {
    try {
        const reponse = await fetch(url, {
            "Content-Type": "application/json",
        });

        const data = await reponse.json();
        return data;
    } catch (error) {
        return error;
    }
}

async function changeStatus(id, status) {
    const response = await fetch(`${url}/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            status,
        })
    });

    return await response.json();
}

export { getAll, changeStatus };
