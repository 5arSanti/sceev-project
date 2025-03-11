const handleAdmin = (user, setAdmin) => {
    if (user.ID_Tipo_Usuarios === 1) {
        setAdmin(true);
        return;
    }
    setAdmin(false);
}

export { handleAdmin };