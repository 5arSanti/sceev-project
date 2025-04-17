const handleInputChange = (key, value, setState) => {
    const parsedValue = !isNaN(value) && value.trim() !== "" ? Number(value) : value;

    setState((prevValues) => ({
        ...prevValues,
        [key]: parsedValue
    }));
};

export { handleInputChange };