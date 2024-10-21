import Chart from 'chart.js/auto';
import React from 'react';
import { AppContext } from '../../../../Context';

import "./styles.css"

const Graph = ({values={}, index="", wrapper=false}) => {
    const context = React.useContext(AppContext);

    const colors = context.activeHighContrast ? ["#FFF", "#FFF", "#FFF"] :  ["rgba(90,91,93, .6)", "rgba(224,22,30, .6)", "rgba(28,123,251,.5)"];

    let highContrastStyle = context.activeHighContrast ? "#FFF" : "#000";


    React.useEffect(() => {
        // Configuración de los datos
        const data = {
            labels: values?.labels,
            datasets: [
                {
                    label: values?.datasetLabel[0],
                    data: values?.data[0],

                    backgroundColor: colors[0], // Color de fondo
                    borderColor: colors[0], // Color del borde
                    borderWidth: 1,
                    color: highContrastStyle
                },
                {
                    label: values?.datasetLabel[1],
                    data: values?.data[1],

                    backgroundColor: colors[1], // Color de fondo
                    borderColor: colors[1], // Color del borde
                    borderWidth: 1,
                    color: highContrastStyle
                },
            ],
        };

        // Configuración del gráfico
        const options = {
            indexAxis: values?.options?.indexAxis,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: highContrastStyle, }
                },
                x: {
                    ticks: { color: highContrastStyle, }
                },
            },
            plugins: {
                legend: {
                    labels: { color: highContrastStyle }
                },
            },
            color: highContrastStyle,
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 0,
                   
        };

        // Crear la instancia del gráfico
        const ctx = document.getElementById(`myChart${index}`).getContext('2d');
        const myChart = new Chart(ctx, {
            type: values?.options.type,
            data: data,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, [values, highContrastStyle, index]);

    return (
        <div className={`${wrapper ? "graph-container" : ""}`}>
            <canvas id={`myChart${index}`}></canvas>
        </div>
    )
};

export { Graph } ;