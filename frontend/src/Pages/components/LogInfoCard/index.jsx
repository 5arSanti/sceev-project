import { FadeWrapper } from "../FadeWrapper";
import { SpanCard, TextCard } from "../TextComponents";
import { WrapperContainer3 } from "../WrapperContainers";

import "./styles.css";

const LogInfoCard = ({icon, title, text, fontSize=24}) => {
    return(
        <FadeWrapper>
            <WrapperContainer3 height="100%" flexDirection="column" gap={20} justifyContent="center" padding={40} className="log-info-card">
                {icon || ""}

                <TextCard fontSize={fontSize} className="bold" textAlign="center">
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