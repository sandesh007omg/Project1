import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1/8',
    expense: 4000,
  },
  {
    name: '1/9',
    expense: 3000,
  },
  {
    name: '1/10',
    expense: 2000,
  },
  {
    name: '1/10',
    expense: 2000,
  },
  {
    name: '1/10',
    expense: 2000,
  },
];

export default class Example extends PureComponent {
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
          <Bar dataKey="expense" fill="#FF5722" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
