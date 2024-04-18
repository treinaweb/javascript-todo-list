import { myFetch } from "../helpers.js";

async function getAll() {
    try {
        const response = await myFetch("/todos");
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

async function changeStatus(id, status) {
    const response = await myFetch(`/todos/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            status,
        }),
    });

    if (!response.ok) {
        throw new Error("Erro ao alterar status do card");
    }

    return await response.json();
}

export { getAll, changeStatus };
