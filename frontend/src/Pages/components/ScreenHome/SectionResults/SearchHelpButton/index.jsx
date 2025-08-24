import React from "react";
import { TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { ButtonCard } from "../../../ButtonCard";

import "./styles.css";

const SearchHelpButton = () => {
    const [showHelp, setShowHelp] = React.useState(false);

    const toggleHelp = () => {
        setShowHelp(!showHelp);
    };

    return (
        <div className="search-help-container">
            <ButtonCard
                title="Ayuda de búsqueda"
                onClick={toggleHelp}
                className="search-help-button"
                padding={8}
            >
                💡 Ayuda
            </ButtonCard>

            {showHelp && (
                <>
                    <div className="search-help-overlay" onClick={toggleHelp}></div>
                    <div className="search-help-popup">
                        <WrapperContainer2 flexDirection="column" gap={20} padding={25}>
                            <WrapperContainer2 justifyContent="space-between" alignItems="center" padding={0}>
                                <TextCard fontSize={18} className="search-help-popup-title">
                                    <strong>Guía de Búsqueda de Vacantes</strong>
                                </TextCard>
                                <ButtonCard
                                    title="Cerrar ayuda"
                                    onClick={toggleHelp}
                                    className="search-close-button"
                                    padding={5}
                                >
                                    ✕
                                </ButtonCard>
                            </WrapperContainer2>

                            <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
                                <WrapperContainer2 flexDirection="column" gap={10} className="search-help-step">
                                    <div className="search-step-header">
                                        <div className="search-step-icon">🔍</div>
                                        <TextCard fontSize={16} className="search-step-title">
                                            <strong>Búsqueda por palabras clave</strong>
                                        </TextCard>
                                    </div>
                                    <TextCard fontSize={14}>
                                        Escribe términos como &quot;Desarrollador&quot;, &quot;Contador&quot;, &quot;Ingeniero&quot; para encontrar ofertas específicas.
                                    </TextCard>
                                </WrapperContainer2>

                                <WrapperContainer2 flexDirection="column" gap={10} className="search-help-step">
                                    <div className="search-step-header">
                                        <div className="search-step-icon">🎯</div>
                                        <TextCard fontSize={16} className="search-step-title">
                                            <strong>Filtros avanzados</strong>
                                        </TextCard>
                                    </div>
                                    <TextCard fontSize={14}>
                                        Usa los filtros desplegables para refinar por departamento, sector, tipo de contrato y más.
                                    </TextCard>
                                </WrapperContainer2>

                                <WrapperContainer2 flexDirection="column" gap={10} className="search-help-step">
                                    <div className="search-step-header">
                                        <div className="search-step-icon">📊</div>
                                        <TextCard fontSize={16} className="search-step-title">
                                            <strong>Resultados en tiempo real</strong>
                                        </TextCard>
                                    </div>
                                    <TextCard fontSize={14}>
                                        Los resultados se actualizan automáticamente. Usa la paginación para navegar entre páginas.
                                    </TextCard>
                                </WrapperContainer2>

                                <WrapperContainer2 flexDirection="column" gap={10} className="search-help-step">
                                    <div className="search-step-header">
                                        <div className="search-step-icon">📋</div>
                                        <TextCard fontSize={16} className="search-step-title">
                                            <strong>Ver detalles</strong>
                                        </TextCard>
                                    </div>
                                    <TextCard fontSize={14}>
                                        Haz clic en cualquier oferta para ver información detallada y requisitos.
                                    </TextCard>
                                </WrapperContainer2>
                            </WrapperContainer2>

                            <div className="search-help-tip">
                                <TextCard fontSize={13} textAlign="center" className="search-tip-text">
                                    💡 <strong>Consejo:</strong> Combina varios filtros para encontrar exactamente lo que buscas
                                </TextCard>
                            </div>
                        </WrapperContainer2>
                    </div>
                </>
            )}
        </div>
    );
};

export { SearchHelpButton };
