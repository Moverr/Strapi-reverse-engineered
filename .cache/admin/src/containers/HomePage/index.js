import React, { Component } from 'react';
import { Chart } from 'react-charts'





import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import ColumnChartwithIndexlabel from "../../charts/overview/Column Chart with Indexlabel";
import ChartWithCrosshair from "../../charts/overview/Chart with Crosshair";
import ChartWithZoom from "../../charts/overview/Chart with Zoom";
import AnimatedChart from "../../charts/overview/Animated Chart";
import MultiseriesChart from "../../charts/overview/Multiseries Chart";
import MultipleAxisChart from "../../charts/overview/Multiple Axis Chart";
import ChartWithScaleBreaks from "../../charts/overview/Chart with Scale Breaks";
import ChartWithLogarithmicAxis from "../../charts/overview/Chart with Logarithmic Axis";
import PerformanceDemo from "../../charts/overview/Performance Demo";
import ChartWithDrillDown from "../../charts/overview/Chart with Drilldown";

import LineChart from "../../charts/line charts/Line Chart";
import SplineChart from "../../charts/line charts/Spline Chart";
import StepLineChart from "../../charts/line charts/Step Line Chart";

import AreaChart from "../../charts/area charts/Area Chart";
import MultiSeriesAreaChart from "../../charts/area charts/Multi Series Area Chart";
import SplineAreaChart from "../../charts/area charts/Spline Area Chart";
import StepAreaChart from "../../charts/area charts/Step Area Chart";
import RangeAreaChart from "../../charts/area charts/Range Area Chart";
import RangeSplineAreaChart from "../../charts/area charts/Range Spline Area Chart";
import StackedAreaChart from "../../charts/area charts/Stacked Area Chart";
import StackedArea100Chart from "../../charts/area charts/Stacked Area 100 Chart";

import ColumnChart from "../../charts/column charts/Column Chart";
import BarChart from "../../charts/column charts/Bar Chart";
import RangeColumnChart from "../../charts/column charts/Range Column Chart";
import StackedColumnChart from "../../charts/column charts/Stacked Column Chart";
import StackedColumn100Chart from "../../charts/column charts/Stacked Column 100 Chart";
import RangeBarChart from "../../charts/column charts/Range Bar Chart";
import StackedBarChart from "../../charts/column charts/Stacked Bar Chart";
import StackedBar100Chart from "../../charts/column charts/Stacked Bar 100 Chart";
import WaterfallChart from "../../charts/column charts/Waterfall Chart";

import PieChart from "../../charts/pie & funnel charts/Pie Chart";
import PieChartWithCustomization from "../../charts/pie & funnel charts/Pie Chart with Customization";
import DoughnutChart from "../../charts/pie & funnel charts/Doughnut Chart";
import FunnelChart from "../../charts/pie & funnel charts/Funnel Chart";
import FunnelChartWithCustomNeck from "./pie & funnel charts/Funnel Chart with Custom Neck";
import PyramidChart from "../../charts/pie & funnel charts/Pyramid Chart";

import CandlestickChart from "../../charts/financial charts/Candlestick Chart";
import OhlcChart from "../../charts/financial charts/OHLC Chart";

import ScatterChart from "../../charts/scatter & bubble charts/Scatter Chart";
import ScatterChartWithCustomMarkers from "./scatter & bubble charts/Scatter Chart with Custom Markers";
import BubbleChart from "../../charts/scatter & bubble charts/Bubble Chart";

import BoxAndWhiskerChart from "../../charts/box & whisker charts/Box & Whisker Chart";
import BoxAndWhiskerChartWithCustomization from "../../charts/box & whisker charts/Box & Whisker Chart with Customization";

import ErrorChart from "../../charts/combination charts/Error Chart";
import ErrorLineChart from "../../charts/combination charts/Error Line Chart";
import ParetoChart from "../../charts/combination charts/Pareto Chart";
import ColumnLineAreaChart from "../../charts/combination charts/Column Line Area Chart";

import DynamicLineChart from "../../charts/dynamic charts/Dynamic Line Chart";
import DynamicColumnChart from "../../charts/dynamic charts/Dynamic Column Chart";
import DynamicMultiSeriesChart from "../../charts/dynamic charts/Dynamic Multi Series Chart";






export default class componentName extends Component {
  constructor() {
    super();
  }


  chart = () => {

    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: 'Series 2',
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ],
      []
    );

    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    );



  }

  render() {
    return (
      <div>
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <h1> MOVER</h1>

          {/* <ColumnChartwithIndexlabel/> */}
        </div>
      </div>
    )
  }
}
