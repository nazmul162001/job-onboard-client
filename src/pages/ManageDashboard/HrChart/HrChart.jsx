import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_API } from '../../../config';
import Chart from "react-apexcharts";

const HrChart = () => {
  const [employeeData, setEmployeeData] = useState([]);
  console.log(employeeData.filtering);

  useEffect(() => {
    axios
      .get(`${BASE_API}/getEmployees`)
      .then((result) => setEmployeeData(result.data));
  }, []);

  // charts 
  const options = {
    series: [employeeData.filtering?.frontEnd.length, employeeData.filtering?.backend.length, employeeData.filtering?.others.length],
    labels: ["Others", "Front-End Developer", "Backend-Developer"],
    plotOptions: {
      pie: {
        expandOnClick:false,
        donut:{
          size: "75px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            }
          }
        }
      }
    }
  }
  const series = [employeeData.filtering?.frontEnd.length, employeeData.filtering?.backend.length, employeeData.filtering?.others.length];

  // Genders HR 
  const gender = {
    genderSeries: [employeeData.filtering?.female.length, employeeData.filtering?.male.length],
    labels: ["Male", "Female"],
    plotOptions: {
      pie: {
        expandOnClick:false,
        donut:{
          size: "75px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            }
          }
        }
      }
    }
  }
  
  const genderSeries = [employeeData.filtering?.female.length, employeeData.filtering?.male.length];

  
  
  return (
    <section>
      <div className="chart mx-3 my-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 py-3">
        <div className=" bg-white px-3 rounded">
          <h2 className='text-xl font-medium my-3'>Headcount By Department</h2>
          <Chart 
            options={options}
            series={series}
            type="donut"
            width="100%"
            height={300}
          />
        </div>
        <div className=" bg-white px-3 rounded">
        <h2 className='text-xl font-medium my-3'>Gender Demographics</h2>
          <Chart 
            options={gender}
            series={genderSeries}
            type="donut"
            width="100%"
            height={255}
          />
        </div>
      </div>
    </section>
  );
};

export default HrChart;