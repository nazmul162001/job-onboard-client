import React from 'react';

const Features = () => {
  return (
    <div>
      <div className='flex justify-center items-center mb-10'>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead >
              <tr>
                <th className='text-3xl font-bold  text-primary'> # </th>
                <th className='text-3xl font-bold text-yellow-400'>Features</th>
                {/* <th>Job</th>
                <th>Favorite Color</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='text-2xl font-bold'>1</th>
                <td className='text-2xl font-bold'>Cy Ganderton</td>
                {/* <td>Quality Control Specialist</td>
                <td>Blue</td> */}
              </tr>
              <tr class="hover">
                <th className='text-2xl font-bold'>2</th>
                <td className='text-2xl font-bold'>Hart Hagerty</td>
                {/* <td>Desktop Support Technician</td>
                <td>Purple</td> */}
              </tr>
              <tr>
                <th className='text-2xl font-bold'>3</th>
                <td className='text-2xl font-bold'>Brice Swyre</td>
                {/* <td>Tax Accountant</td>
                <td>Red</td> */}
              </tr>
              <tr>
                <th className='text-2xl font-bold'>4</th>
                <td className='text-2xl font-bold'>Brice Swyre</td>
                {/* <td>Tax Accountant</td>
                <td>Red</td> */}
              </tr>
              <tr>
                <th className='text-2xl font-bold'>5</th>
                <td className='text-2xl font-bold'>Brice Swyre</td>
                {/* <td>Tax Accountant</td>
                <td>Red</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Features;