import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { UsersGrid } from "../UsersGrid";

const SectionUsersList = () => {
    return(
        <SectionWrapper>
            <SectionTitle subTitle="Las personas que administran..." title="Lista de usuarios"/>
            <UsersGrid/>
        </SectionWrapper>
    );
}

export { SectionUsersList };