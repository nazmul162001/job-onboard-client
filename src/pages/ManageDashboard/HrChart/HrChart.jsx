import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_API } from '../../../config';

const HrChart = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API}/getEmployees`)
      .then((result) => setEmployeeData(result.data));
  }, []);

  
  
  return (
    <section>
      <div className="chart grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="total_employee">
          <h2>
            
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HrChart;