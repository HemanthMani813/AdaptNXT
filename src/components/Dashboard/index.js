import SalesChart from "../SalesChart"
import SalesPieChart from "../SalesPieChart"
import "./index.css"

const Dashboard=()=>{
    return(
        <div className="dashboard">
                <div className="dash_head">
                    <h3>DashBoard</h3>
                </div>
                <div className="chart-container">
                    <div>
                        <SalesChart/>
                    </div>
                    <div>
                        <SalesPieChart/>
                    </div>
                    
                </div>
                
            </div>
    )
}
export default Dashboard