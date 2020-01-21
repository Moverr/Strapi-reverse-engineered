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

import {  Route,NavLink,  BrowserRouter} from "react-router-dom";
import ApexCharts from 'apexcharts';





export default class componentName extends Component {
  constructor() {
    super();
  }
 

    options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }

  

  render() {
    return (
      <div>
        <div    style={{  width: '400px',  height: '300px' }} >
          <h1> MOVER</h1>
           {
             chart = new ApexCharts(document.querySelector("#chart"), options);
             chart.render();                      
           } 
        </div>
      </div>
    )
  }
}
