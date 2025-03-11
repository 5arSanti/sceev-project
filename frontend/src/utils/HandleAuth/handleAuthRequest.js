import axios from "axios";
import { api } from "../api";
import { handleNotifications } from "../handleNotifications";


axios.defaults.withCredentials = true;

const handleAuthRequest = async (context, navigate) => {
    const { setUser, setAuth } = context;

    await axios.get(`${api}/auth/`, { mode: "cors" })
        .then(response => {
            const { data } = response;

            if(data.Status === "Success") {
                setAuth(true);
                setUser(data.user);
            } else {
                setAuth(false);
            }
        })
        .catch(err => {
            setAuth(false);
            handleNotifications("error", err.message)
            navigate("/home");
        })
}

export { handleAuthRequest };