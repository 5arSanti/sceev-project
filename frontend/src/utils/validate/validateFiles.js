/**
 * Valida que exista archivo y opciones requeridas en el cliente.
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
 * Verifica que el archivo exista y no esté vacío (cliente).
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
 * Verifica que una opción exista y no sea cadena vacía (cliente).
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

export { validateFiles, validateFile, validateFileOption };