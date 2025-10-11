import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";

/**
 * Descarga un recurso como blob desde un endpoint dado.
 * @param {string} endpoint
 * @returns {Promise<Blob>}
 */
const handleGetFile = async (endpoint) => {
    try {
        const response = await fetch(`${api}/${endpoint}`, {
            method: "GET"
        });

        if (!(response.status == 200)) {
            throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        }

        return await response.blob();
    } 
    catch (err) {
        throw new Error(err)
    }
}

/**
 * Envía DELETE a `file/{endpoint}` y maneja notificaciones/recarga.
 * @param {string} endpoint
 */
const handleDeleteFile = async (endpoint) => {
    try {
        const response = await fetch(`${api}/file/${endpoint}`, {
            method: "DELETE"
        });
        const data = await response.json();

        if(data.Status === "Success") {
            handleNotifications("success", data.message);
            reloadLocation();

            return data.Status;
        } else {
            handleNotifications("error", data.Error)
        }

    } 
    catch (err) {
        handleNotifications('error', err);

    }
}

export { handleGetFile, handleDeleteFile };