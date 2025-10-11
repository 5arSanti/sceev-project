import { api } from "../api";

/**
 * Realiza una petición GET a un endpoint del backend y retorna el JSON.
 * Lanza error si la respuesta contiene `Error` o status != 200.
 */
const fetchData = async (endpoint) => {
    const response = await fetch(`${api}/${endpoint}`, {
		mode: "cors",
		method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
	});
    const data = await response.json();

    if (data.Error) {
        throw new Error(data.Error)
    }

    if (response.status !== 200) {
        throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }

    return await data;
};

/**
 * Ejecuta múltiples GET en paralelo y combina los resultados en un solo objeto.
 * @param {string[]} endpoints
 * @returns {Promise<Record<string, any>>}
 */
const fetchAllData = async (endpoints) => {
    const resultsArray = await Promise.all(
        endpoints.map(fetchData)
    );

    const combinedResults = resultsArray.reduce((acc, result) => {
        return { ...acc, ...result };
    }, {});

    return combinedResults;
};

export { fetchAllData };