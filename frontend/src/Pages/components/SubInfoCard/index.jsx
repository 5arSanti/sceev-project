/* eslint-disable react/prop-types */
import { SpanCard, TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";


const SubInfoCard = ({
    subTitle, 
    text, 
    textAlign="center",
    titleSize=10,
    textSize=14
}) => {
    return (
        <WrapperContainer2 flexDirection="column" padding={0} gap={5} height="auto">
            <TextCard textAlign={textAlign}><SpanCard fontSize={titleSize}>{subTitle}</SpanCard></TextCard>
            <TextCard fontSize={textSize} className={"italic"} textAlign={textAlign}>{text}</TextCard>
        </WrapperContainer2>
    );
}

export { SubInfoCard };