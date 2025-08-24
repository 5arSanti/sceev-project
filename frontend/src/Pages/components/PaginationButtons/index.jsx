import { PaginationInputText } from "./PaginationInputText";

import { MdFirstPage } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdLastPage } from "react-icons/md";
import { WrapperContainer2 } from "../WrapperContainers";
import { handlePagination } from "../../../utils/handlePagination";
import { ButtonCard } from "../ButtonCard";
import PropTypes from 'prop-types';

import "./styles.css";

const PaginationButtons = ({ data = {}, setState }) => {

    const paginateTo = (type = "") => {
        handlePagination(type, setState, data?.totalPages, data?.currentPage);
    }

    const isFirstPage = data?.currentPage === 1;
    const isLastPage = data?.currentPage === data?.totalPages;

    return (
        <WrapperContainer2 flexDirection="row" justifyContent="center" alignItems="center" padding={5} gap={8} className="enhanced-pagination-buttons">
            {/* Botón primera página */}
            <ButtonCard
                title="Ir a la primera página"
                onClick={() => paginateTo("home")}
                padding={10}
                className={`pagination-btn first-page-btn ${isFirstPage ? 'disabled' : ''}`}
                disabled={isFirstPage}
            >
                <MdFirstPage />
            </ButtonCard>
            
            {/* Botón página anterior */}
            <ButtonCard
                title="Página anterior"
                onClick={() => paginateTo("back")}
                padding={10}
                className={`pagination-btn prev-page-btn ${isFirstPage ? 'disabled' : ''}`}
                disabled={isFirstPage}
            >
                <IoIosArrowBack />
            </ButtonCard>

            {/* Input de página */}
            <div className="pagination-input-wrapper">
                <PaginationInputText
                    data={data}
                    setState={setState}
                    className="enhanced-pagination-input"
                />
            </div>

            {/* Botón página siguiente */}
            <ButtonCard
                title="Siguiente página"
                onClick={() => paginateTo("next")}
                padding={10}
                className={`pagination-btn next-page-btn ${isLastPage ? 'disabled' : ''}`}
                disabled={isLastPage}
            >
                <IoIosArrowForward />
            </ButtonCard>

            {/* Botón última página */}
            <ButtonCard
                title="Ir a la última página"
                onClick={() => paginateTo("last")}
                padding={10}
                className={`pagination-btn last-page-btn ${isLastPage ? 'disabled' : ''}`}
                disabled={isLastPage}
            >
                <MdLastPage />
            </ButtonCard>
        </WrapperContainer2>
    );
}

PaginationButtons.propTypes = {
    data: PropTypes.object,
    setState: PropTypes.func
};

export { PaginationButtons };