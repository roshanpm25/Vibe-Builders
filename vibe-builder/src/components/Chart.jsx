import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function Chart({ scores }) {
  const data = Object.keys(scores).map((vibe) => ({
    name: vibe,
    score: scores[vibe],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="score" fill="#ff69b4" />
      </BarChart>
    </ResponsiveContainer>
  );
}
