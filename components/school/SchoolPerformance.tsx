import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const SchoolPerformance = ({ performance }: any) => (
  <div className="section-box">
    <h2 className="section-title">National Exam Performance</h2>
    <LineChart width={200} height={300} data={performance}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="passRate" stroke="#8884d8" />
    </LineChart>
  </div>
)


export default SchoolPerformance