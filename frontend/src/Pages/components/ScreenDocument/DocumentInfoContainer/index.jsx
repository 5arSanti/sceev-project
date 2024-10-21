import React from "react";
import { AppContext } from "../../../../Context";
import { saveImages } from "../../../../utils/saveImages";
import { WrapperContainer2 } from "../../WrapperContainers";
import { DocumentPDFFiltersViewer } from "../DocumentPDFFiltersViewer";
import { SubTitle } from "../../SubTitle";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { DocumentGraphsGrid } from "../DocumentGraphsGrid";
import { VerifyLength } from "../../VerifyLengthWrapper";

const DocumentInfoContainer = () => {
    const context = React.useContext(AppContext)

    const graphsArray = context.responseData?.exportGraphs ||  null;

    const [graphImages, setGraphImages] = React.useState(null);
    React.useEffect(() => {
        context.setLoading(true);
        if(graphsArray) {
            setTimeout(() => {
                setGraphImages(saveImages(graphsArray))
                context.setLoading(false);
            }, 2000)
        }
    }, [graphsArray])


    return(
        <WrapperContainer2
            flexDirection="column"
            padding={0}
        >
            <DocumentPDFFiltersViewer 
                array={graphsArray} 
                graphImages={graphImages}
            />
            

            <WrapperContainer2 flexDirection="column" padding={0}>
                <SubTitle>Vista previa de las gráficas:</SubTitle>
                <VerifyLength array={graphsArray}>
                    <AllInfoGridContainer className="grid-1-1">
                        {graphsArray?.map((item, index) => (
                            <DocumentGraphsGrid item={item} index={index} key={index}/>
                        ))}
                    </AllInfoGridContainer>
                </VerifyLength>

            </WrapperContainer2>

        </WrapperContainer2>
    );
}

export { DocumentInfoContainer };