import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_API } from '../../../config';
import Chart from "react-apexcharts";

const HrChart = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API}/getEmployees`)
      .then((result) => setEmployeeData(result.data));
  }, []);

  // charts 
  const options = {
    series: [2,4,5],
    labels: ["Apple", "Banana", "Grapes"],
    plotOptions: {
      pie: {
        expandOnClick:false,
      }
    }
  }
  
  const series = [2,4,5];
  
  
  return (
    <section>
      <div className="chart grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="total_employee">
          <Chart 
            options={options}
            series={series}
            type="donut"
            width="100%"
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HrChart;