import { getMonthsUntilCurrent, yearArray } from "../../../utils/dateFunctions";
import { handleInputChange } from "../../../utils/handleInputChange";
import { GridContainer } from "../GridContainer";
import { OptionInputCard } from "../InputsCards";

const YearAndMonthFilterCard = ({state={}, setState, id, className="grid-1-1", year=true, month=true, padding=15}) => {

    const monthsArray = Object.keys(getMonthsUntilCurrent(state?.year));

    return(
        
            <GridContainer className={`${className} ${!(year && month) && "grid-1"}`}>
                {year && 
                    <OptionInputCard 
                        id={`${id}-year`} 
                        label={"Año"} 
                        array={yearArray}
                        onChange={(event) => handleInputChange("year", event, setState)}
                        defaultValue={state?.year}
                        padding={padding}
                    />
                }

                {month &&
                    <OptionInputCard 
                        id={`${id}-month`} 
                        label={"Mes"} 
                        array={monthsArray}
                        onChange={(event) => handleInputChange("month", event, setState)}
                        defaultValue={state?.month}
                        padding={padding}
                    />
                }
            </GridContainer>
    );
}

export { YearAndMonthFilterCard };