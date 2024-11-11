import { SpanCard, TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";

const SubInfoCard = ({subTitle, text, textAlign="center"}) => {
    return (
        <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
            <TextCard textAlign={textAlign}><SpanCard fontSize={10}>{subTitle}</SpanCard></TextCard>
            <TextCard fontSize={14} className={"italic"} textAlign={textAlign}>{text}</TextCard>
        </WrapperContainer2>
    );
}

export { SubInfoCard };