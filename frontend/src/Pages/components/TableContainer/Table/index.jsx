import "./styles.css";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { ButtonCard } from "../../ButtonCard";
import { MdOutlineSave } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { GridContainer } from "../../GridContainer";
import { InputCard, OptionInputCard } from "../../InputsCards";
import { handleInputChange } from "../../../../utils/handleInputChange";

const ReactTable = ({ data = [], onDelete, onUpdate, userTypes = [], values, setValues }) => {
	const [editableRow, setEditableRow] = React.useState(null);

	const columns = data.length > 0 ? Object.keys(data[0]).filter((col) => col !== "userTypeId") : [];

	const handleEdit = (rowIndex, rowData) => {
		setEditableRow(rowIndex);
		setValues(rowData);
	};

	const handleSave = () => {
		if (onUpdate) {
			onUpdate(values);
		}
		setEditableRow(null);
	};

	return (
		<table className="table-container" id="dataTable">
			<thead>
				<tr className="action-row">
					{columns.map((column, index) => (
						<th key={index}>{column}</th>
					))}
					{(onDelete || onUpdate) && <th>Accion</th>}
				</tr>
			</thead>

			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columns.map((column, colIndex) => (
							<td key={colIndex}>
								{editableRow === rowIndex ? (
									column === "userType" ? (
										<OptionInputCard
											id={column}
											haveLabel={false}
											defaultValue={values[column]}
											onChange={(value) => handleInputChange("userTypeId", value, setValues)}
											array={userTypes}
											padding={5}
										/>
									) : (
										<InputCard
											id={column}
											type="text"
											haveLabel={false}
											defaultValue={values[column]}
											onChange={(event) => handleInputChange(column, event, setValues)}
										/>
									)
								) : (
									row[column]
								)}
							</td>
						))}
						{onDelete && (
							<td className="action-row">
								<ButtonCard title="Eliminar usuario" padding={5} borderWidth={0} onClick={() => onDelete(row)}>
									<MdDeleteOutline /> Eliminar
								</ButtonCard>
							</td>
						)}
						{onUpdate && (

							editableRow === rowIndex ? (
								<td className="action-row">
									<GridContainer className="grid-1-1" gap={0} padding={0}>
										<ButtonCard title="Guardar cambios" padding={5} borderWidth={0} onClick={handleSave}>
											<MdOutlineSave />
										</ButtonCard>
										<ButtonCard title="Cancelar" padding={5} borderWidth={0} onClick={() => (setEditableRow(null))}>
											<MdOutlineCancel />
										</ButtonCard>
									</GridContainer>
								</td>
							) : (
								<td className="action-row">
									<ButtonCard padding={5} borderWidth={0} onClick={() => handleEdit(rowIndex, row)}>
										<MdEdit /> Editar
									</ButtonCard>
								</td>
							)
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { ReactTable };