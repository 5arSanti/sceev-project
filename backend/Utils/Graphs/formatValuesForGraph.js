/**
 * Estructura valores para gráficos (labels, dataset y datos).
 * @param {Record<string, number>} object - Mapa etiqueta->valor
 * @returns {{data: number[], dataLabels: string[], datasetLabel: string[]}}
 */
const formatValuesForGraph = (object) => {
    const dataLabels = Object.keys(object);
    const datasetLabel = ["Ofertas de empleo"] || Object.keys(object[dataLabels[0]]);

    const data = dataLabels.map(label => object[label]);

    return { data, dataLabels, datasetLabel };
}

module.exports =  { formatValuesForGraph };