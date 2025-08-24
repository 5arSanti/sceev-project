import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

import "./styles.css";

const SectionProjectPurpose = () => {
    return (
        <SectionWrapper id={"section-project-purpose"}>
            <SectionTitle 
                subTitle="Conectando talento con oportunidades a nivel nacional"
                title="¿Qué es SCEEV?"
            />
            
            <WrapperContainer2 flexDirection="column" gap={30} padding={0}>
                <TextCard textAlign="center" fontSize={18} className="main-description">
                    SCEEV es un sistema especializado de <strong>cargue, exposición y estadísticas de vacantes</strong> que 
                    revoluciona la forma en que se visualizan las ofertas de empleo en Colombia.
                </TextCard>

                <GridContainer gap={40} className="grid-1-1-1">
                    
                    <WrapperContainer2 width="100%" flexDirection="column" gap={15} alignItems="center" className="feature-item">
                        <div className="feature-icon search-icon">
                            <span>🔍</span>
                        </div>
                        <TextCard textAlign="center" fontSize={16}>
                            <strong>Búsqueda Inteligente</strong><br/>
                            Encuentra ofertas laborales filtradas por ubicación, sector y tipo de empleo
                        </TextCard>
                    </WrapperContainer2>

                    <WrapperContainer2 width="100%" flexDirection="column" gap={15} alignItems="center" className="feature-item">
                        <div className="feature-icon visualization-icon">
                            <span>📊</span>
                        </div>
                        <TextCard textAlign="center" fontSize={16}>
                            <strong>Visualización Interactiva</strong><br/>
                            Explora las vacantes a través de mapas y gráficos dinámicos
                        </TextCard>
                    </WrapperContainer2>

                    <WrapperContainer2 flexDirection="column" gap={15} alignItems="center" className="feature-item">
                        <div className="feature-icon stats-icon">
                            <span>📈</span>
                        </div>
                        <TextCard textAlign="center" fontSize={16}>
                            <strong>Estadísticas en Tiempo Real</strong><br/>
                            Accede a análisis detallados del mercado laboral nacional
                        </TextCard>
                    </WrapperContainer2>

                </GridContainer>

                <WrapperContainer2 flexDirection="column" gap={20} padding={30} className="purpose-highlight">
                    <TextCard textAlign="center" fontSize={20} className="highlight-title">
                        <strong>Nuestro Objetivo</strong>
                    </TextCard>
                    <TextCard textAlign="center" fontSize={16}>
                        Democratizar el acceso a información laboral de calidad, permitiendo que cualquier usuario 
                        pueda encontrar oportunidades de empleo de manera eficiente y tomar decisiones informadas 
                        sobre su futuro profesional.
                    </TextCard>
                </WrapperContainer2>

            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { SectionProjectPurpose };
