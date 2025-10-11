/* eslint-disable react/prop-types */
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./styles.css";

/**
 * Input de texto con etiqueta opcional e ícono embebido.
 * Breakpoints: layout vertical fluido mediante CSS de `.input-container`.
 */
const InputCard = ({
    type = "text",
    id,
    label,
    placeholder = "placeholder",
    onChange,
    required = true,
    defaultValue = "",
    className = "input-container",
    haveLabel = true,
    icon
}) => {

    return (
        <div className={`${className}`}>
            {haveLabel && <label htmlFor={id}>{label} {required && "*"}</label>}

            <div className="icon-input-container">
                {icon && icon}

                <input
                    type={type}
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    onChange={(event) => { onChange(event.target.value) }}
                    required={required}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
}

/**
 * Select con opciones dinámicas y valor por defecto controlado.
 * Breakpoints: hereda estilos responsivos del contenedor.
 */
const OptionInputCard = ({
    id,
    label,
    array,
    onChange,
    defaultValue = "",
    none = false,
    padding = 15,
    required = false,
    haveLabel = true,
}) => {

    return (
        <div className="input-container">
            {haveLabel && <label htmlFor={id}>{label} </label>}
            <select
                name={id}
                id={id}
                onChange={(event) => { onChange(event.target.value) }}
                value={defaultValue}
                style={{ padding: padding }}
                required={required}
            >
                {none &&
                    <option value="">Seleccionar</option>
                }
                {array && array?.map((item, index) => (
                    <option
                        key={index}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

/**
 * Área de texto con etiqueta y validación requerida.
 * Breakpoints: permite redimensionar verticalmente (CSS) en pantallas pequeñas.
 */
const TextAreaCard = ({ id, label, placeholder = "placeholder", onChange, required = true, stateKey, defaultValue = "" }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label} {required && "*"}</label>
            <textarea
                placeholder={placeholder}
                name={id}
                id={id}
                onChange={(event) => { onChange(event.target.value) }}
                required
                defaultValue={defaultValue}
            />
        </div>
    );
}

/**
 * Botón/tarjeta de carga de archivos con vista previa simple de nombres.
 * Breakpoints: caja flexible y centrada; ícono escalable por CSS.
 */
const UploadFileCard = ({ id, label = "Cargar Archivo", onChange, filesArray, multiple = true, info = "Archivos PDF (.pdf) o Excel (.xlsx)", accept = ".pdf, .xlsx" }) => {
    const array = filesArray ? [...filesArray] : null;

    return (
        <label htmlFor={id} className="upload-file-container">
            <input
                id={id}
                name={id}
                type="file"
                accept={accept}
                onChange={(event) => { onChange(event) }}
                onClick={(event) => event.target.value = null}
                multiple={multiple}
            />
            <span>
                <AiOutlineCloudUpload />
            </span>
            <div className="upload-file-info-container">
                <p>{label}</p>
                {array && array?.length !== 0 ? [...filesArray]?.map((item, index) => (
                    <p className="info-text" key={index}>{`(${index + 1})`} {item.name}</p>
                ))
                    :
                    <p>{info}</p>
                }
            </div>

        </label>
    );
}


export { InputCard, OptionInputCard, TextAreaCard, UploadFileCard };