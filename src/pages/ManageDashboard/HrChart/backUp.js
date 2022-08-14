

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


// in return 
<Chart 
  options={options}
  series={series}
  type="donut"
  width="100%"
  height={300}
  />