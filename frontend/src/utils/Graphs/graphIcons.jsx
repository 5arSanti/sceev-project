import { GoGraph } from "react-icons/go";
import { MdBarChart } from "react-icons/md";
import { BiSolidDoughnutChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { PiChartPolarFill } from "react-icons/pi";
import { AiOutlineRadarChart } from "react-icons/ai";

import { TbAxisX } from "react-icons/tb";
import { TbAxisY } from "react-icons/tb";

const graphIcons = {
    "bar": <MdBarChart />,
    "doughnut": <BiSolidDoughnutChart />,
    "pie": <FaChartPie />,
    "line": <GoGraph/>,
    "polarArea": <PiChartPolarFill />,
    "radar": <AiOutlineRadarChart />, 
}

const axisIcons = {
    "x": <TbAxisX />,
    "y": <TbAxisY />,
}

export { graphIcons, axisIcons }; 