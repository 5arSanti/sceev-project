import { Title } from "../Title";
import { FadeWrapper } from "../FadeWrapper";
import { WrapperContainer2 } from "../WrapperContainers";
import { TextCard } from "../TextComponents";

import "./styles.css";

const MainSectionInfoCard = ({title="", subTitle="", icon, white=false}) => {
    return(
        <FadeWrapper>
            <WrapperContainer2 justifyContent="space-evenly" alignItems="center" gap={50} flexDirection="column" padding={80} className="main-section-info-card">

                <WrapperContainer2 height="auto" justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    {icon}
                    <Title white={white}>
                        {title}
                    </Title>
                    <TextCard white={true} textAlign="center" className="italic">
                        {subTitle}
                    </TextCard>

                </WrapperContainer2>

            </WrapperContainer2>
        </FadeWrapper>
    );
}

export { MainSectionInfoCard };