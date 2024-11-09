const valuesColors = ["rgba(90,91,93, .6)", "rgba(224,22,30, .6)", "rgba(28,123,251,.6)"];

const textColor = "#000";

const getGraphData = (values) => {
    const data = {
        labels: values?.labels,
        datasets: [
            {
                label: values?.graphValues[0],
                data: values?.data[0],

                backgroundColor: valuesColors[0],
                borderColor: valuesColors[0],
                borderWidth: 1,
                color: textColor,
            },
            {
                label: values?.datasetLabel[1],
                data: values?.data[1],

                backgroundColor: valuesColors[1],
                borderColor: valuesColors[1],
                borderWidth: 1,
                color: textColor
            },
        ],
    };

    return data;
}

const getGraphOptions = (values) => {
    const options = {
        indexAxis: values?.indexAxis,
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