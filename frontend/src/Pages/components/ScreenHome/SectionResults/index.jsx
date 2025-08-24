import React from "react";

import { SectionWrapper } from "../../SectionWrapper";
import { FiltersContainer } from "../../FiltersContainer";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ResultsCard } from "../ResultsCard";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { AppContext } from "../../../../Context";

import { OfertsCountCard } from "../../OfertsCountCards";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { PaginationButtons } from "../../PaginationButtons";
import { SearchHelpButton } from "./SearchHelpButton";

import "./styles.css";

const SectionFiltersResults = () => {
    const context = React.useContext(AppContext);

    const { ofertsData } = context.responseData || [];
    const { oferts } = ofertsData || [];

    return (
        <SectionWrapper id={"section-filter-results"}>
            <SectionTitle subTitle="Encuentre todas las" title="Ofertas de Empleo"/>

            <OfertsCountCard/>

            <div className="search-vertical-layout">
                <div className="filters-panel-top">
                    <WrapperContainer2 flexDirection="column" gap={0} padding={0} className="filters-wrapper">
                        <WrapperContainer2 alignItems="center" justifyContent="space-between" padding={0} marginBottom={15} className="filters-header">
                            <SubTitle className="filters-title">Filtros de Búsqueda</SubTitle>
                            <SearchHelpButton />
                        </WrapperContainer2>
                        <FiltersContainer/>
                    </WrapperContainer2>
                </div>

                <div className="results-panel-bottom">
                    <WrapperContainer2 padding={0} flexDirection="column" className="results-wrapper">
                        <WrapperContainer2 justifyContent="space-between" alignItems="center" padding={0} className="results-header">
                            <SubTitle className="results-title">Resultados de la Búsqueda</SubTitle>
                            {ofertsData?.totalPages > 1 && (
                                <TextCard fontSize={13} className="page-text">
                                    Página {ofertsData?.currentPage} de {ofertsData?.totalPages}
                                </TextCard>
                            )}
                        </WrapperContainer2>

                        {oferts && oferts.length > 0 ? (
                            <>
                                <ScrollableWrapper maxHeight={600} gap={20} className="results-scroll">
                                    {oferts.map((item, index) => (
                                        <ResultsCard
                                            key={index}
                                            index={index}
                                            item={item}
                                        />
                                    ))}
                                </ScrollableWrapper>
                                
                                {ofertsData?.totalPages > 1 && (
                                    <div className="pagination-wrapper">
                                        <PaginationButtons data={ofertsData} setState={context.setOfertsFilter}/>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="no-results">
                                <WrapperContainer2 flexDirection="column" gap={15} padding={40} alignItems="center">
                                    <div className="no-results-icon">🔍</div>
                                    <TextCard fontSize={18} textAlign="center" className="no-results-title">
                                        <strong>No se encontraron resultados</strong>
                                    </TextCard>
                                    <TextCard fontSize={14} textAlign="center" className="no-results-message">
                                        Intenta ajustar los filtros o usar términos de búsqueda diferentes para encontrar más ofertas laborales.
                                    </TextCard>
                                </WrapperContainer2>
                            </div>
                        )}
                    </WrapperContainer2>
                </div>
            </div>
        </SectionWrapper>
    );
};

export { SectionFiltersResults };