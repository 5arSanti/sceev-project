const handleInputChange = (key, value, setState) => {
    const parsedValue = !isNaN(value) && String(value).trim() !== "" ? Number(value) : value;

    setState((prevValues) => ({
        ...prevValues,
        [key]: parsedValue
    }));
};

export { handleInputChange };