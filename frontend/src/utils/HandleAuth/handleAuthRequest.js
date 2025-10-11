import axios from "axios";
import { api } from "../api";
import { handleNotifications } from "../handleNotifications";


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

/**
 * Verifica autenticación del usuario contra el backend y actualiza contexto.
 * Redirige a /home ante error o no autenticado.
 * @param {{ setUser: Function, setAuth: Function }} context
 * @param {(path: string) => void} navigate
 */
const handleAuthRequest = async (context, navigate) => {
    const { setUser, setAuth } = context;

    try {
        const response = await axios.get(`${api}/auth/`);
        const { data } = response;

        if(data.Status === "Success") {
            setAuth(true);
            setUser(data.user);
        } else {
            setAuth(false);
        }
    } catch (err) {
        setAuth(false);
        handleNotifications("error", err.message);
        navigate("/home");
    }
}

export { handleAuthRequest };