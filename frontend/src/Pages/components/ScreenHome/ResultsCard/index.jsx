import moment from "moment";
import { Link } from "react-router-dom";

import { GridContainer } from "../../GridContainer";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SlideButtonCard } from "./SlideButtonCard";
import { formatNumbers } from "../../../../utils/formatNumbers";

import "./styles.css";

const ResultsCard = ({ item = {}, index = 1 }) => {
    const formatSalary = (salary) => {
        if (!salary || salary === 0) return "No especificado";
        return `$ ${formatNumbers(salary)}`;
    };

    const getJobTypeIcon = (title) => {
        const titleLower = title?.toLowerCase() || "";
        if (titleLower.includes("desarrollador") || titleLower.includes("programador")) return "💻";
        if (titleLower.includes("ingeniero")) return "⚙️";
        if (titleLower.includes("diseñador")) return "🎨";
        if (titleLower.includes("contador") || titleLower.includes("contable")) return "📊";
        if (titleLower.includes("vendedor") || titleLower.includes("comercial")) return "🤝";
        if (titleLower.includes("administrativo") || titleLower.includes("asistente")) return "📋";
        if (titleLower.includes("gerente") || titleLower.includes("director")) return "👔";
        if (titleLower.includes("marketing")) return "📈";
        if (titleLower.includes("recursos humanos")) return "👥";
        if (titleLower.includes("médico") || titleLower.includes("enfermero")) return "🏥";
        return "💼";
    };

    const getDaysAgo = (date) => {
        const publishDate = moment(date);
        const now = moment();
        const daysAgo = now.diff(publishDate, 'days');

        if (daysAgo === 0) return "🟢 Hoy";
        if (daysAgo === 1) return "🟡 Ayer";
        if (daysAgo <= 7) return `🟡 Hace ${daysAgo} días`;
        if (daysAgo <= 30) return `🟠 Hace ${Math.floor(daysAgo / 7)} semanas`;
        return `🔴 Hace ${Math.floor(daysAgo / 30)} meses`;
    };

    return (
        <Link to={`/ofert/${item.Codigo_Oferta}`} style={{ width: "100%" }}>
            <div className="enhanced-results-card">
                <div className="card-header">
                    <WrapperContainer2 justifyContent="space-between" alignItems="flex-start" padding={0} gap={15}>
                        <WrapperContainer2 alignItems="center" gap={12} padding={0} className="job-title-section">
                            <div className="job-icon">
                                {getJobTypeIcon(item.Titulo_Oferta)}
                            </div>
                            <div className="title-info">
                                <TextCard fontSize={18} className="job-title">
                                    <strong>#{index + 1} {item.Titulo_Oferta}</strong>
                                </TextCard>
                                <TextCard fontSize={12} className="job-code">
                                    📋 Código: {item.Codigo_Oferta}
                                </TextCard>
                            </div>
                        </WrapperContainer2>

                        <div className="publication-date">
                            <TextCard fontSize={11} className="date-badge">
                                {getDaysAgo(item.Fecha_Publicacion)}
                            </TextCard>
                        </div>
                    </WrapperContainer2>
                </div>

                <div className="card-main-info">
                    <GridContainer className="grid-1-1" gap={15}>
                        <div className="salary-info">
                            <WrapperContainer2 alignItems="center" gap={8} padding={0}>
                                <span className="info-icon">💰</span>
                                <TextCard fontSize={16} className="salary-text">
                                    <strong>{formatSalary(item.Salario_Ingresado)}</strong>
                                </TextCard>
                            </WrapperContainer2>
                        </div>

                        <div className="company-info">
                            <WrapperContainer2 alignItems="center" gap={8} padding={0}>
                                <span className="info-icon">🏢</span>
                                <TextCard fontSize={14} className="company-text">
                                    {item.Prestadores}
                                </TextCard>
                            </WrapperContainer2>
                        </div>
                    </GridContainer>
                </div>

                <div className="card-description">
                    <WrapperContainer2 alignItems="center" gap={8} padding={0} className="description-header">
                        <span className="info-icon">📝</span>
                        <TextCard fontSize={14} className="description-label">
                            <strong>Descripción:</strong>
                        </TextCard>
                    </WrapperContainer2>

                    <ScrollableWrapper maxHeight={120} className="description-scroll">
                        <TextCard fontSize={13} className="description-text">
                            {item.Descripcion_Oferta}
                        </TextCard>
                    </ScrollableWrapper>
                </div>

                <div className="card-footer">
                    <WrapperContainer2 justifyContent="space-between" alignItems="center" padding={0}>
                        <WrapperContainer2 alignItems="center" gap={8} padding={0}>
                            <span className="info-icon">📅</span>
                            <TextCard fontSize={12} className="publish-date">
                                Publicado: {moment(item.Fecha_Publicacion).format("DD/MM/YYYY")}
                            </TextCard>
                        </WrapperContainer2>

                        <SlideButtonCard />
                    </WrapperContainer2>
                </div>
            </div>
        </Link>
    );
}

export { ResultsCard };