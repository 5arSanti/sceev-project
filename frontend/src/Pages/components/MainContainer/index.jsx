import { useLocation } from 'react-router-dom';
import { formatURL, removeFirstLetter } from '../../../utils/strings';

import { DateCard } from "../DateCard";

// import { DropNav } from '../DropDownCards/DropNav';
import { WrapperContainer2, WrapperContainer4 } from '../WrapperContainers';
import { TextCard } from '../TextComponents';


import "./styles.css"

const MainContainer = ({children}) => {
    const location = useLocation();
    const text = removeFirstLetter(formatURL(location.pathname))

    return(
        <div className="main-container">
            <div className="drop-date-container">
                <TextCard>{text}</TextCard>

                <DateCard/>
            </div>

            <WrapperContainer4>
                <WrapperContainer2 padding={0} flexDirection='column' gap={40}>
                    {children}
                </WrapperContainer2>
            </WrapperContainer4>
        </div>
    );
}

export { MainContainer };