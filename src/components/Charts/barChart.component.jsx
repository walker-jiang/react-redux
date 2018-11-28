import React from 'react';

let jsxContent = <div />;

const BarChartComponent = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  componentWillMount() {
    require.ensure(['recharts'], (require) => {
      const recharts = require('recharts');
      const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = recharts;

      jsxContent = (
        <BarChart width={600} height={300} data={this.props.data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="发帖量" fill="#8884d8" />
          <Bar dataKey="回复数" fill="#82ca9d" />
        </BarChart>
      );

      this.forceUpdate(() => {});
    }, 'addons');
  },

  render() {
    return jsxContent;
  }
});


export default BarChartComponent;
