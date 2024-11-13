const valuesColors = ["rgba(90,91,93, .6)", "rgba(224,22,30, .6)", "rgba(28,123,251,.6)"];

const textColor = "#000";

const getGraphData = (graph) => {
    const data = {
        labels: graph?.dataLabels,
        datasets: graph?.datasetLabel?.map((item, index) => ({
            label: graph?.datasetLabel,
            data: graph?.data,

            backgroundColor: valuesColors[index],
            borderColor: valuesColors[index],
            borderWidth: 1,
            color: textColor,
        })),
    };

    return data;
}

const getGraphOptions = (graph) => {
    const options = {
        indexAxis: graph?.indexAxis,
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: textColor, }
            },
            x: {
                ticks: { color: textColor, }
            },
        },
        plugins: {
            legend: {
                labels: { color: textColor }
            },
        },
        color: textColor,
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 0,
               
    };

    return options;
}

export { valuesColors, textColor, getGraphData, getGraphOptions };