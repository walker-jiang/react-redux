import React from 'react';

let jsxContent = <div />;

const LineChartComponent = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  
  componentWillMount() {
    require.ensure(['recharts'], (require) => {
      const rechart = require('recharts');
      const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = rechart;

      jsxContent =(
        <LineChart width={600} height={300} data={this.props.data}
                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      );

      this.forceUpdate();
    }, 'addons');
  },

  render () {
    return jsxContent;
  }
});

export default LineChartComponent;
