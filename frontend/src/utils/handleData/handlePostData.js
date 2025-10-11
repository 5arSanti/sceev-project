import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";


/**
 * Envía un POST JSON al backend y muestra notificaciones según el resultado.
 * @param {Event} event
 * @param {Record<string, any>} object
 * @param {string} endpoint
 * @param {(data?: any) => void} [callback]
 * @param {Record<string, string>} [headers]
 */
const handlePostData = async (event, object, endpoint, callback = reloadLocation, headers = {}) => {
    event.preventDefault();

    try {
        const url = `${api}${endpoint}`;

        const options = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...headers
            },
            body: JSON.stringify(object)
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (data.Status === "Success") {
            handleNotifications("success", data.message);
            callback();

            return data.Status;
        } else {
            handleNotifications("error", data.Error)
        }

    } catch (err) {
        handleNotifications('error', err);
    }
};



/**
 * Envía un POST con FormData para carga de archivos.
 * @param {Event} event
 * @param {FormData} object
 * @param {string} endpoint
 * @param {(data?: any) => void} [callback]
 */
const handlePostFile = async (event, object, endpoint, callback = reloadLocation) => {
    event.preventDefault();
    try {
        const url = `${api}${endpoint}`;

        const options = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: object
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (data.Status === "Success") {
            handleNotifications("success", data.message);

            callback(data);
        } else {
            handleNotifications("error", data.Error)
        }

    } catch (err) {
        handleNotifications('error', err);
    }
};

export { handlePostData, handlePostFile };
