import axios from "axios";
import { api } from "../api";
import { handleNotifications } from "../handleNotifications";


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

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