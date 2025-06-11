import { toast } from "react-toastify";

const handleNotifications = (type, value, position = 'bottom-right') => {
    const notiType = {
        "info": () => toast.info(value || "Información", { position }),
        "error": () => toast.error(value || "Error", { position }),
        "success": () => toast.success(value || "Completado Exitosamente", { position }),
    };
    return (notiType[type] || notiType["info"])();
}

export { handleNotifications };