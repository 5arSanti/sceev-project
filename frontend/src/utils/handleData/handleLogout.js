import axios from "axios";
import { api } from "../api";
import { handleNotifications } from "../handleNotifications";

const handleLogout = (navigate) => {
    axios.get(`${api}/auth/logout`)
        .then(res => {
            const { data } = res;

            if(data.Status == "Success") {
                handleNotifications("info", "Sesión Cerrada Correctamente")
                return navigate("/");
            }
        })
        .catch(err => { handleNotifications("error", err) })
}

export { handleLogout };