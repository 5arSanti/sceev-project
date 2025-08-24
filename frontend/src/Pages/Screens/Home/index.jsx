import { WrapperContainer2 } from "../../components/WrapperContainers";

import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledSection } from "../../components/StyledSection";
import { mainHome } from "../../../assets";

import { SectionMainHome } from "../../components/ScreenHome/SectionMainHomeInfo";
import { SectionProjectPurpose } from "../../components/ScreenHome/SectionProjectPurpose";
import { SectionAboutProject } from "../../components/ScreenHome/SectionAboutProject";
import { SectionInteractiveMap } from "../../components/ScreenHome/SectionInteractiveMap";
import { SectionFiltersResults } from "../../components/ScreenHome/SectionResults";

const Home = () => {
    return (
        <AuthWrapper>
            <WrapperContainer2 flexDirection="column" padding={0} gap={0}>

                <StyledSection image={mainHome} id={"section-styled-home"}>
                    <SectionMainHome/>
                </StyledSection>
                
                <SectionProjectPurpose/>
                
                <SectionInteractiveMap/>
                
                <SectionFiltersResults/>

                <SectionAboutProject/>

            </WrapperContainer2>
        </AuthWrapper>
    );
}

export { Home };