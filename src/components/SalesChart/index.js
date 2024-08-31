import "./index.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '6/30/2024- 7/6/2024',
    sales: 4000,
    orders: 6100,
    amt: 2400,
  },
  {
    name: '7/7/2024- 7/13/2024',
    sales: 800,
    orders: 800,
    amt: 2210,
  },
  {
    name: '7/21/2024- 7/27/2024',
    sales: 500,
    orders: 800,
    amt: 2290,
  }
  
];



const SalesChart=()=>{
    return(
        <div className='line-chart'>
            <h3>Sales Vs Orders</h3>
            <ResponsiveContainer width={700} height={500}>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="orders" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                </LineChart>
        </ResponsiveContainer>
        </div>
    )
}
export default SalesChart