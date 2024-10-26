import { useLocation } from "react-router-dom";
import { TextCard } from "../TextComponents";
import { formatURL, removeFirstLetter } from "../../../utils/strings";

const LocationCard = () => {
    const location = useLocation();
    const text = removeFirstLetter(formatURL(location.pathname))
    
    return (
        <TextCard>{text}</TextCard>
    );
}

export { LocationCard };