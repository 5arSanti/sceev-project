/* eslint-disable react/prop-types */
import Chart from 'chart.js/auto';
import React from 'react';

import { getGraphData, getGraphOptions } from './Config';

import "./styles.css"

const Graph = ({graphValues={}, index="", wrapper=false}) => {

    const graph = graphValues?.graph || {};
    
    React.useEffect(() => {
        const data = getGraphData(graph);
    
        const options = getGraphOptions(graphValues);
        
        const ctx = document.getElementById(`myChart${index}`).getContext('2d');
        const myChart = new Chart(ctx, {
            type: graphValues?.graphType,
            data: data,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, [graphValues]);

    return (
        <div className={`${wrapper ? "graph-container" : ""}`}>
            <canvas id={`myChart${index}`}></canvas>
        </div>
    )
};

export { Graph } ;