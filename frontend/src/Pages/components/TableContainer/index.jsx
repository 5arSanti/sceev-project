import { ReactTable } from "./Table";
import { NotFoundCard } from "../NotFoundCard";
import { WrapperContainer2 } from "../WrapperContainers";
import { ScrollableWrapper } from "../ScrollableWrapper";

import "./styles.css";

const TableContainer = ({data}) => {
	return(
		<ScrollableWrapper maxHeight={400}>
			<div className="scroll-wrapper">
				<ReactTable
					data={data}
				/>
			</div>

		</ScrollableWrapper>
	);
}

export { TableContainer }