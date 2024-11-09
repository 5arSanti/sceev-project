
// import { SliderInstructionsContainer } from "../../SliderInstructionsContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ProcessCSVForm } from "../ProcessCSVForm";
import { CsvLogCard } from "../CsvLogCard";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";

const ProcessCSVInfoContainer = () => {

    const stringifiedDataLog = localStorage.getItem("data-log");
    const parsedDataLog = JSON.parse(stringifiedDataLog);

    return(
        <SectionWrapper>
            <SectionTitle 
                title="Carga Eficiente de Datos" 
                subTitle="Maximiza la rapidez y precisión al integrar tus archivos en la base de datos del SCEEV"
            />

            <WrapperContainer2 padding={0} flexDirection="column" gap={40}>
                <ProcessCSVForm/>

                {parsedDataLog &&
                    <VerifyLength array={parsedDataLog}>
                        {parsedDataLog?.map((item, index) => (
                            <CsvLogCard key={index} item={item}/>
                        ))}
                    </VerifyLength>
                }
            </WrapperContainer2>
        </SectionWrapper>
    );
}

export { ProcessCSVInfoContainer };