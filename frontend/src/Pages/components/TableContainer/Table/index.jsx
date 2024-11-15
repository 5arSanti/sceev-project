import "./styles.css";

const ReactTable = ({data={}}) => {
	const columns = data ? Object.keys(data[0]) : [];

	return (
		<table className="table-container" id="dataTable">
			<thead>
				<tr>
					{columns?.map((column, index) => (
						<th key={index}>{column}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data?.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columns?.map((column, colIndex) => (
							<td key={colIndex}>{row?.[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { ReactTable };