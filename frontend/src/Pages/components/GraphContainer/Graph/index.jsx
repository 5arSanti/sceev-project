/* eslint-disable react/prop-types */
import Chart from 'chart.js/auto';
import React from 'react';

import "./styles.css"
import { getGraphData, getGraphOptions } from './Config';

const Graph = ({values={}, index="", wrapper=false}) => {

    
    
    React.useEffect(() => {
        const data = getGraphData(values);
    
        const options = getGraphOptions(values);
        
        const ctx = document.getElementById(`myChart${index}`).getContext('2d');
        const myChart = new Chart(ctx, {
            type: values?.graphType,
            data: data,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, [values]);

    return (
        <div className={`${wrapper ? "graph-container" : ""}`}>
            <canvas id={`myChart${index}`}></canvas>
        </div>
    )
};

export { Graph } ;