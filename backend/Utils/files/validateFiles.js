const validateFiles = (file, option) => {
	try {
		validateFile(file);
		validateFileOption(option);
		return;
	} catch (err) {
		throw new Error(err.message);
	}
}

const validateFile = (file) => {
	const message = "Por favor, seleccione un archivo";

	if (!file) {
		throw new Error(message);
	}
	if (!file.length) {
		throw new Error(message);
	}
}

const validateFileOption = (option) => {
	const message = "Por favor, seleccione el lugar de publicación.";

	if (!option) {
		throw new Error(message);
	}
}

const validateFileExtension = (file) => {
	const extension = file.filename.split('.').pop();

	const message = `Por favor, cargue un archivo xlsx, no un archivo ${extension}.`;

	if (extension != "xlsx") {
		throw new Error(message);
	}
}

module.exports = { validateFiles, validateFile, validateFileOption, validateFileExtension };