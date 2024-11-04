import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

const SectionTitle = ({title="", subTitle=""}) => {
    return(
        <WrapperContainer2 flexDirection="column" gap={0}>
            {subTitle != "" && 
                <TextCard fontSize={12} textAlign="center">{subTitle}</TextCard>
            }

            {title != "" &&
                <Title>{title.toLocaleUpperCase()}</Title>
            }
        </WrapperContainer2>
    );
}

export { SectionTitle };