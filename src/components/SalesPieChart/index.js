import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import "./index.css"

const data = [
    { name: 'Shopify Store', value: 44.2 },
    { name: 'WooCommerce  Store', value: 55.8 }
];

const COLORS = ['#0088FE', '#FF8042'];

const SalesPieChart=()=>{
    return(
        <div className='pie-chart'>
            <h3>Portion of sales</h3>
            <ResponsiveContainer width={400} height={500}>
                <PieChart>
                    <Pie dataKey="value" data={data} fill="#8884d8" label>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
        
    )
}
export default SalesPieChart