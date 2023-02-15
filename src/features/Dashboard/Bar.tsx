import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1/8',
    uv: 4000,
  },
  {
    name: '1/9',
    uv: 3000,
  },
  {
    name: '1/10',
    uv: 2000,
  },
  {
    name: '1/10',
    uv: 2000,
  },
  {
    name: '1/10',
    uv: 2000,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="50%" height="50%">
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#FF5722" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
