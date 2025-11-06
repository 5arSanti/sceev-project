import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";

// Mapeo de rutas a nombres legibles en español
const routeNameMap = {
    home: "Inicio",
    stats: "Estadísticas",
    ofert: "Oferta",
    upload: "Cargar Datos",
    users: "Usuarios",
    register: "Registro",
    login: "Iniciar Sesión",
    edit: "Editar",
    create: "Crear",
    view: "Ver",
    delete: "Eliminar"
};

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    if (pathnames.length === 0) {
        return null;
    }

    const formatName = (name) => {
        // Si es un número o ID, mostrarlo con formato especial
        if (!isNaN(name)) {
            return `#${name}`;
        }
        // Buscar en el mapa o capitalizar la primera letra
        return routeNameMap[name.toLowerCase()] || name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <nav className="breadcrumb-container" aria-label="breadcrumb">
            <ol className="breadcrumb-list">
                {/* Home siempre presente */}
                <li className="breadcrumb-item">
                    <Link to="/home" className="breadcrumb-link">
                        <span className="breadcrumb-icon">🏠</span>
                        <span className="breadcrumb-text">Inicio</span>
                    </Link>
                </li>

                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const displayName = formatName(name);

                    return (
                        <React.Fragment key={routeTo}>
                            <li className="breadcrumb-separator" aria-hidden="true">
                                <svg
                                    className="breadcrumb-separator-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </li>
                            <li className={`breadcrumb-item ${isLast ? "breadcrumb-item-active" : ""}`}>
                                {isLast ? (
                                    <span className="breadcrumb-text breadcrumb-current">
                                        {displayName}
                                    </span>
                                ) : (
                                    <Link to={routeTo} className="breadcrumb-link">
                                        <span className="breadcrumb-text">{displayName}</span>
                                    </Link>
                                )}
                            </li>
                        </React.Fragment>
                    );
                })}
            </ol>
        </nav>
    );
};

export { Breadcrumb };

