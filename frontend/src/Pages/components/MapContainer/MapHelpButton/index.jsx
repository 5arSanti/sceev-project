import React from "react";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ButtonCard } from "../../ButtonCard";

import "./styles.css";

const MapHelpButton = () => {
    const [showHelp, setShowHelp] = React.useState(false);

    const toggleHelp = () => {
        setShowHelp(!showHelp);
    };

    return (
        <div className="map-help-container">
            <ButtonCard
                title="Ayuda del mapa"
                onClick={toggleHelp}
                className="help-button"
                padding={10}
            >
                ❓ ¿Cómo usar el mapa?
            </ButtonCard>

            {showHelp && (
                <>
                    <div className="help-overlay" onClick={toggleHelp}></div>
                    <div className="help-popup">
                        <WrapperContainer2 flexDirection="column" gap={20} padding={25}>
                            <WrapperContainer2 justifyContent="space-between" alignItems="center" padding={0}>
                                <TextCard fontSize={18} className="help-popup-title">
                                    <strong>Guía del Mapa Interactivo</strong>
                                </TextCard>
                                <ButtonCard
                                    title="Cerrar ayuda"
                                    onClick={toggleHelp}
                                    className="close-button"
                                    padding={5}
                                >
                                    ✕
                                </ButtonCard>
                            </WrapperContainer2>

                            <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
                                <WrapperContainer2 flexDirection="row" gap={15} alignItems="center" padding={0} className="help-step">
                                    <div className="help-step-icon hover-step">
                                        🖱️
                                    </div>
                                    <TextCard fontSize={14}>
                                        <strong>Pasa el cursor</strong> sobre cualquier departamento para ver información básica
                                    </TextCard>
                                </WrapperContainer2>

                                <WrapperContainer2 flexDirection="row" gap={15} alignItems="center" padding={0} className="help-step">
                                    <div className="help-step-icon click-step">
                                        👆
                                    </div>
                                    <TextCard fontSize={14}>
                                        <strong>Haz clic</strong> en un departamento para filtrar las vacantes de esa región
                                    </TextCard>
                                </WrapperContainer2>

                                <WrapperContainer2 flexDirection="row" gap={15} alignItems="center" padding={0} className="help-step">
                                    <div className="help-step-icon view-step">
                                        📊
                                    </div>
                                    <TextCard fontSize={14}>
                                        <strong>Consulta</strong> la información detallada en el panel superior izquierdo
                                    </TextCard>
                                </WrapperContainer2>
                            </WrapperContainer2>

                            <div className="help-tip">
                                <TextCard fontSize={13} textAlign="center" className="tip-text">
                                    💡 <strong>Tip:</strong> Usa el botón &quot;Borrar selección&quot; para ver todas las vacantes nuevamente
                                </TextCard>
                            </div>
                        </WrapperContainer2>
                    </div>
                </>
            )}
        </div>
    );
};

export { MapHelpButton };
