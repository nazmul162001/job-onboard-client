import React from "react";
import { BASE_API } from "../../../config";
import Chart from "react-apexcharts";
// import { useQuery } from "@tanstack/react-query";
// import auth from "../../../Auth/Firebase/Firebase.init";
import Loading from "../../../Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import HrChartSlice, { fetchHrChart } from "../../../Features/HrChart/HrChartSlice";

const HrChart = () => {
  // const { data, isLoading } = useQuery(["hrEmployees"], () => {
  //   fetch(`${BASE_API}/userEmployees?email=${auth?.currentUser?.email}`, {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json());
  // });

  const {isLoading, charts, error}
   = useSelector(state => state.charts)

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchHrChart())
  },[dispatch])
  
  // const charts = data?.data;

  const frontEnds = charts?.filter(
    (d) => d.designation === "Front-End Developer"
  );

  const backends = charts?.filter(
    (d) => d.designation === "Back-End Developer"
  );
  const fullStack = charts?.filter(
    (d) => d.designation === "Full-Stack Developer"
  );

  const gendersM = charts?.filter((d) => d.gender === "Male");
  const gendersF = charts?.filter((d) => d.gender === "Female");
  const gendersO = charts?.filter((d) => d.gender === "Others");

  const other = charts?.filter(
    (d) =>
      d.designation !== "Front-End Developer" &&
      d.designation !== "Back-End Developer" &&
      d.designation !== "Full-Stack Developer"
  );

  // console.log(other);

  // console.log(other);

  // charts
  const options = {
    series: [other?.length, frontEnds?.length, backends?.length, fullStack?.length],
    labels: [
      `Others-${other?.length}`,
      `FrontEnd-${frontEnds?.length}`,
      `Backend-${backends?.length}`,
      `Full-Stack-${fullStack?.length}`,
    ],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "70px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
  };
  const series = [
    other?.length,
    frontEnds?.length,
    backends?.length,
    fullStack?.length,
  ];

  // Genders HR
  const gender = {
    genderSeries: [gendersM?.length, gendersF?.length, gendersO?.length],
    labels: [
      `Male-${gendersM?.length}`,
      `Female-${gendersF?.length}`,
      `Others-${gendersO?.length}`,
    ],
    colors: ["#287872", "#849028"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "70px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
  };

  const genderSeries = [gendersM?.length, gendersF?.length, gendersO?.length];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="chart mx-3 my-10 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-3 py-3">
        <div className="bg-base-100 px-3 rounded">
          <h2 className="text-xl font-medium my-3">Headcount By Department</h2>
          <Chart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height={300}
          />
        </div>
        <div className=" bg-base-100 px-3 rounded">
          <h2 className="text-xl font-medium my-3">Gender Demographics</h2>
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
