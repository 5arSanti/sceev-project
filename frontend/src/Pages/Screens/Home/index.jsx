import { WrapperContainer2 } from "../../components/WrapperContainers";

import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledSection } from "../../components/StyledSection";
import { mainHome } from "../../../assets";

import { SectionMainHome } from "../../components/ScreenHome/SectionMainHomeInfo";
import { SectionAboutProject } from "../../components/ScreenHome/SectionAboutProject";

import { SectionInteractiveMap } from "../../components/ScreenHome/SectionInteractiveMap";
import { GridContainer } from "../../components/GridContainer";
import { DropCard } from "../../components/DropCard";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";

const Home = () => {
    return (

        <AuthWrapper>
            <WrapperContainer2 flexDirection="column" padding={0} gap={0}>

                <StyledSection image={mainHome}>
                    <SectionMainHome/>
                </StyledSection>
                
                <SectionWrapper>
                    <SectionTitle
                        subTitle="Busca tu Oferta de Empleo"
                        title="Mapa interactivo"
                    />
                    <SectionInteractiveMap/>

                    <GridContainer className="grid-075-125">
                        <WrapperContainer2>
                            <DropCard
                                title={"Departamentos"}
                                array={[1,2,3,4,5,6,7,8,9,0,11,2,1341,123]}
                            />
                        </WrapperContainer2>
                    </GridContainer>
                    
                </SectionWrapper>

                <SectionAboutProject/>

            </WrapperContainer2>
        </AuthWrapper>
    );
}

export { Home };