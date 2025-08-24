import React from "react";
import { AppContext } from "../../../Context";
import { DropCard } from "../DropCard";
import { GridContainer } from "../GridContainer";
import { WrapperContainer2 } from "../WrapperContainers";
import { InputCard } from "../InputsCards";
import { TextCard } from "../TextComponents";
import { ButtonCard } from "../ButtonCard";

import { CiSearch } from "react-icons/ci";
import { handleInputChange } from "../../../utils/handleInputChange";

import "./styles.css";

const FiltersContainer = () => {
    const context = React.useContext(AppContext);

    const { ofertsFilters, setOfertsFilter } = context;
    const { filters } = context.responseData || null;

    const array = filters ? Object.keys(filters) : null;

    const getFriendlyLabel = (filterName) => {
        const labels = {
            "Departamentos": "📍 Ubicación",
            "Tipo_Contrato": "📋 Tipo de Contrato", 
            "Regiones": "🗺️ Región",
            "Empleador": "🏢 Empresa",
            "Nivel_Estudios": "🎓 Nivel de Estudios",
            "Prestadores": "🤝 Prestador de Servicios",
            "Municipios": "🏘️ Ciudad",
            "Disciplinas": "💼 Área Profesional"
        };
        return labels[filterName] || filterName;
    };

    const getFilterIcon = (filterName) => {
        const icons = {
            "Departamentos": "📍",
            "Tipo_Contrato": "📋", 
            "Regiones": "🗺️",
            "Empleador": "🏢",
            "Nivel_Estudios": "🎓",
            "Prestadores": "🤝",
            "Municipios": "🏘️",
            "Disciplinas": "💼"
        };
        return icons[filterName] || "🔧";
    };

    const clearAllFilters = () => {
        const clearedFilters = {};
        Object.keys(ofertsFilters || {}).forEach(key => {
            clearedFilters[key] = "";
        });
        setOfertsFilter(clearedFilters);
    };

    const activeFiltersCount = Object.values(ofertsFilters || {}).filter(v => v && v !== "").length;

    return (
        <WrapperContainer2 justifyContent="start" alignItems="start" padding={10} flexDirection="column" gap={20}>
            
            <WrapperContainer2 justifyContent="space-between" alignItems="center" padding={0} className="filters-header-section">
                <WrapperContainer2 alignItems="center" gap={8} padding={0}>
                    <TextCard fontSize={16} className="filters-main-title">
                        <strong>🎯 Refina tu búsqueda</strong>
                    </TextCard>
                    {activeFiltersCount > 0 && (
                        <div className="active-filters-badge">
                            <TextCard fontSize={11} className="active-count">
                                {activeFiltersCount} filtro{activeFiltersCount > 1 ? 's' : ''} activo{activeFiltersCount > 1 ? 's' : ''}
                            </TextCard>
                        </div>
                    )}
                </WrapperContainer2>
                
                {activeFiltersCount > 0 && (
                    <ButtonCard
                        onClick={clearAllFilters}
                        className="clear-filters-btn"
                        padding={6}
                        title="Limpiar todos los filtros"
                    >
                        🗑️ Eliminar filtros
                    </ButtonCard>
                )}
            </WrapperContainer2>

            <WrapperContainer2 flexDirection="column" gap={8} padding={10} className="search-section">
                <TextCard fontSize={13} className="section-label">
                    🔍 <strong>Buscar por palabras clave</strong>
                </TextCard>
                <InputCard
                    id={"search"}
                    haveLabel={false}
                    placeholder="Ej: Desarrollador, Contador, Ingeniero..."
                    icon={<CiSearch/>}
                    onChange={(event) => handleInputChange("Busqueda", event, setOfertsFilter)}
                    defaultValue={ofertsFilters?.Busqueda}
                />
                <TextCard fontSize={11} className="search-help">
                    💡 Escribe el cargo o profesión que buscas
                </TextCard>
            </WrapperContainer2>

            <WrapperContainer2 flexDirection="column" gap={12} padding={0} className="filters-grid-section">
                <TextCard fontSize={13} className="section-label">
                    ⚙️ <strong>Filtros avanzados</strong>
                </TextCard>
                
                <GridContainer padding={0} gap={12} className="enhanced-filters-grid">
                    {array?.map((item, index) => (
                        <WrapperContainer2 key={index} flexDirection="column" gap={6} padding={0} className="filter-item-wrapper">
                            <TextCard fontSize={12} className="filter-label">
                                {getFriendlyLabel(item)}
                            </TextCard>
                            <DropCard
                                haveLabel={false}
                                title={item}
                                array={filters[item]}
                                onClick={(inputValue) => handleInputChange(item, inputValue, setOfertsFilter)}
                                value={ofertsFilters?.[item]}
                                icon={getFilterIcon(item)}
                            />
                        </WrapperContainer2>
                    ))}
                </GridContainer>
            </WrapperContainer2>

            <WrapperContainer2 flexDirection="column" gap={8} padding={0}>
                <TextCard fontSize={11} className="tips-title">
                    💡 <strong>Tips para mejores resultados:</strong>
                </TextCard>
                <TextCard fontSize={10} className="tip-text">
                    • Combina varios filtros para búsquedas más específicas
                </TextCard>
                <TextCard fontSize={10} className="tip-text">
                    • Usa &quot;Todo&quot; para ver todas las opciones disponibles
                </TextCard>
            </WrapperContainer2>

        </WrapperContainer2>
    );
}

export { FiltersContainer };