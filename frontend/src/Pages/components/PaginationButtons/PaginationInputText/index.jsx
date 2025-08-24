
import { formatNumbers } from "../../../../utils/formatNumbers";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import PropTypes from 'prop-types';

import "./styles.css"

const PaginationInputText = ({className = "", data = {}, setState}) => {
    return(
        <WrapperContainer2 alignItems="center" gap={8} padding={0} className={`pagination-input-container ${className}`}>
            <TextCard fontSize={13} className="pagination-label">
                📄 Página
            </TextCard>
            <input 
                type="number" 
                min="1"
                max={data?.totalPages}
                placeholder={data?.currentPage} 
                className="pagination-input"
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
                title={`Ingresa un número entre 1 y ${data?.totalPages}`}
            />
            <TextCard fontSize={13} className="pagination-total">
                de <strong>{formatNumbers(data?.totalPages)}</strong>
            </TextCard>
        </WrapperContainer2>
    );
}

PaginationInputText.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    setState: PropTypes.func
};

export { PaginationInputText };