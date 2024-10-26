import { WrapperContainer2 } from '../WrapperContainers';

import "./styles.css"

const MainContainer = ({children}) => {

    return(
        <WrapperContainer2 padding={0} flexDirection='column' gap={0}>
            {children}
        </WrapperContainer2>
    );
}

export { MainContainer };