import React, { Component } from 'react';
import { Chart } from 'react-charts'


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
        </div>
      </div>
    )
  }
}
