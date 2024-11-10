import { handleInputChange } from "./handleInputChange";

const handlePagination = (type="home", setState, totalPages, currentPage) => {
    if (type == "back") {
        handleInputChange(
            "Page", 
            Math.max(currentPage - 1, 1), 
            setState
        );
    }
    else if (type == "next") {
        handleInputChange(
            "Page", 
            Math.min(currentPage + 1, totalPages), 
            setState
        );
    }
    else if (type == "last") {
        handleInputChange("Page", totalPages, setState);
    }
    else
        handleInputChange("Page", 1, setState);
}

export { handlePagination }