/**
 * Transforma valores 'null' (string) a null en objetos de consulta.
 * @param {Record<string, any>} query - Objeto de parámetros (generalmente req.query)
 * @returns {Record<string, any>} - Objeto normalizado
 */
const transformQueryParams = (query) => {
    return Object.fromEntries(
        Object.entries(query).map(([key, value]) => [key, value === 'null' ? null : value])
    );
};

module.exports = { transformQueryParams };