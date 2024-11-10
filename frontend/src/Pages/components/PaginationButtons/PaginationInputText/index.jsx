
import { formatNumbers } from "../../../../utils/formatNumbers";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { TextCard } from "../../TextComponents";


import "./styles.css"

const PaginationInputText = ({className, data={}, setState}) => {
    return(
        <TextCard textAlign="center" className={`pagination-input-container ${className}`}>
            Pagina 
            <input type="text" pattern="[0-9]" placeholder={data?.currentPage} 
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        const pageNumber = parseInt(event.target.value);
                        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= data?.totalPages) {
                            handleInputChange("Page", pageNumber, setState);
                            event.target.value = "";
                        } else {
                            event.target.value = "";
                        }
                    }
                }}
            />
            de {formatNumbers(data?.totalPages)}
        </TextCard>
    );
}

export { PaginationInputText };