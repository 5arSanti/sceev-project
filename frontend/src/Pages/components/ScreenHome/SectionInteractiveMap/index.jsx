
import { MapContainer } from "../../MapContainer";
import { WrapperContainer2 } from "../../WrapperContainers";

const SectionInteractiveMap = () => {
    return (
        <WrapperContainer2 flexDirection="column" padding={0}>
            <MapContainer/>
        </WrapperContainer2>
    );
}

export { SectionInteractiveMap };