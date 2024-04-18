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

export { myFetch };
