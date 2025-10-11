/**
 * Valida existencia de archivo y opciones requeridas.
 * @throws Error si faltan datos
 */
const validateFiles = (file, option, secondOption) => {
    try {
        validateFile(file);
        validateFileOption(option);
        validateFileOption(secondOption);
        return;
    } catch (err) {
        throw new Error(err.message);
    }
}

/**
 * Verifica que el archivo exista y no esté vacío.
 */
const validateFile = (file) => {
    const message = "Por favor, seleccione un archivo";

    if (!file){
        throw new Error(message);
    }
    if (!(file.length !== 0)) {
        throw new Error(message);
    }
    return;
}

/**
 * Verifica que una opción de archivo exista y no sea cadena vacía.
 */
const validateFileOption = (option) => {
    const message = "Por favor, seleccione el lugar de publicación.";

    if (!option) {
        throw new Error(message);
    }
    if (!(option !== "")) {
        throw new Error(message);
    }
    return;
}

/**
 * Verifica que la extensión del archivo sea csv.
 */
const validateFileExtension = (file) => {
	const extension = file.filename.split('.').pop();

    const message = `Por favor, cargue un archivo csv, no un archivo ${extension}.`;

    if (extension != "csv") {
        throw new Error(message);
    }
    return;
}

module.exports = { validateFiles, validateFile, validateFileOption, validateFileExtension };