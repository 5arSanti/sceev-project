const formatTextYearOrNo = (textValue) => {
    if (textValue == 1) {
        return "Si"
    }

    if (textValue == 0) {
        return "No"
    }
}

export { formatTextYearOrNo }