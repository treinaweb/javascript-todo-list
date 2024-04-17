async function getAll(){
    try{
        let url = 'https://alunos.treinaweb.com.br/twtodos/api/v1/todos';
        const reponse = await fetch(url, {
            "Content-Type": "application/json",
        })

        const data = await reponse.json();
        return data
    }catch(error) {
        return error
    }
}