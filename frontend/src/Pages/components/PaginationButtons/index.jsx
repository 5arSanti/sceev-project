import React from "react";

import { PaginationInputText } from "./PaginationInputText";

import { MdFirstPage } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdLastPage } from "react-icons/md";
import { WrapperContainer2 } from "../WrapperContainers";
import { handlePagination } from "../../../utils/handlePagination";
import { ButtonCard } from "../ButtonCard";

import "./styles.css";

const PaginationButtons = ({data={}, setState}) => {

    const paginateTo = (type="") => {
        handlePagination(type, setState, data?.totalPages, data?.currentPage);
    }

    return(
        <WrapperContainer2 padding={0} className="graph-pagination-buttons">
            <ButtonCard
                title="Volver a la primera pagina"
                onClick={() => paginateTo("home")}
                padding={15}
                className="home-page-pagination"
            >
                <MdFirstPage/>
            </ButtonCard>
            <ButtonCard
                title="Página anterior"
                onClick={() => paginateTo("back")}
                padding={15}
                className="back-page-pagination"
            >
                <IoIosArrowBack/>
            </ButtonCard>

            <PaginationInputText
                data={data}
                setState={setState}
            />

            <ButtonCard
                title="Siguiente página"
                onClick={() => paginateTo("next")}
                padding={15}
                className="next-page-pagination"
            >
                <IoIosArrowForward/>
            </ButtonCard>

            <ButtonCard
                title="Ir a la ultima página"
                onClick={() => paginateTo("last")}
                padding={15}
                className="last-page-pagination"
            >
                <MdLastPage/>
            </ButtonCard>
        </WrapperContainer2>
    );
}

export { PaginationButtons };