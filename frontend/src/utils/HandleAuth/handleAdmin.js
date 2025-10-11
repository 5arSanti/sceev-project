/**
 * Determina si el usuario es administrador y actualiza el estado.
 * @param {{ ID_Tipo_Usuarios: number }} user
 * @param {(isAdmin: boolean) => void} setAdmin
 */
const handleAdmin = (user, setAdmin) => {
    if (user.ID_Tipo_Usuarios === 1) {
        setAdmin(true);
        return;
    }
    setAdmin(false);
}

export { handleAdmin };