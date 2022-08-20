import React, { useEffect, useState } from 'react';
import { BASE_API } from '../../../config';
import Chart from "react-apexcharts";
import { useQuery } from '@tanstack/react-query';
import auth from '../../../Auth/Firebase/Firebase.init';

const HrChart = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const { isLoading, refetch } = useQuery(["hrEmployees"], () => {
    fetch(`${BASE_API}/userEmployees?email=${auth?.currentUser?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setEmployeeData(data));
  });

  const frontEnds = employeeData.filter(d => d.designation === "Front-End Developer")
  
  const backends = employeeData.filter(d => d.designation === "Back-End Developer")

  const gendersM = employeeData.filter(d => d.gender === "Male")
  const gendersF = employeeData.filter(d => d.gender === "Female")

  const other = employeeData.filter(d => d.designation !== "Front-End Developer" && d.designation !== "Back-End Developer")

  // console.log(other);

  // console.log(other);

  // charts 
  const options = {
    series: [other.length, frontEnds.length, backends.length],
    labels: [`Others-${other.length}`, `Front-End Developer-${frontEnds.length}`, `Backend-Developer-${backends.length}`],
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
  const series = [other.length, frontEnds.length, backends.length];

  // Genders HR 
  const gender = {
    genderSeries: [gendersM.length, gendersF.length],
    labels: [`Male-${gendersM.length}`, `Female-${gendersF.length}`],
    colors: ["#287872","#849028"],
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
  
  const genderSeries = [gendersM.length, gendersF.length];

  
  
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
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default HrChart;