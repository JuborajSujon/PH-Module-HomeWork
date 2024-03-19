import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Alice", math: 75, physics: 80, chemistry: 85 },
    { id: 2, name: "Bob", math: 80, physics: 85, chemistry: 90 },
    { id: 3, name: "Charlie", math: 85, physics: 90, chemistry: 95 },
    { id: 4, name: "David", math: 90, physics: 60, chemistry: 100 },
    { id: 5, name: "Eve", math: 95, physics: 70, chemistry: 105 },
    { id: 6, name: "Frank", math: 70, physics: 90, chemistry: 80 },
    { id: 7, name: "Grace", math: 60, physics: 65, chemistry: 70 },
    { id: 8, name: "Henry", math: 50, physics: 70, chemistry: 60 },
    { id: 9, name: "Ivy", math: 75, physics: 80, chemistry: 85 },
    { id: 10, name: "Jack", math: 90, physics: 95, chemistry: 100 },
  ];
  return (
    <div>
      <LChart width={500} height={300} data={studentMarks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="id" />
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="#3334d8" />
      </LChart>
    </div>
  );
};

export default LineChart;
