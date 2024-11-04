import { AnchorCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";
import { FaSquareGithub } from "react-icons/fa6";

const GitHubRepoCard = () => {
    return(
        <WrapperContainer2 justifyContent="center" alignItems="center" padding={0} height="auto">
            <AnchorCard
                uri="https://github.com/5arSanti/sceev-project" 
                width="auto" 
                className="privacy-policy animacion2" 
                fontSize={13} 
                white={true} 
                textAlign="center"
            >
                Repositorio de GitHub 
                <FaSquareGithub/>
            </AnchorCard>
        </WrapperContainer2>
    );
}

export { GitHubRepoCard };