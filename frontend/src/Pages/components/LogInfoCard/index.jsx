import { FadeWrapper } from "../FadeWrapper";
import { SpanCard, TextCard } from "../TextComponents";
import { WrapperContainer3 } from "../WrapperContainers";

import "./styles.css";

const LogInfoCard = ({icon, title, text}) => {
    return(
        <FadeWrapper>
            <WrapperContainer3 flexDirection="column" gap={20} justifyContent="center" padding={40} className="log-info-card">
                {icon || ""}

                <TextCard white={true} fontSize={24} className="bold" textAlign="center">
                    {text}
                </TextCard>

                <TextCard textAlign="center">
                    <SpanCard className={"italic"}>
                        {title}
                    </SpanCard>
                </TextCard>

            </WrapperContainer3>
        </FadeWrapper>
    );
}

export { LogInfoCard };