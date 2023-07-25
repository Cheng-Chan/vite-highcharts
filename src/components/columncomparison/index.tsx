import Chart from "../../charts/chart";

const ColumnComparisonChart = () => {
  const data = [
    {
      "data": [
        null,
        88353.131815,
        97829.366125,
        94794.675144,
        269574.968936,
        291945.069637
      ]
    },
    {
      "data": [
        null,
        67180.457978,
        67242.683701,
        108245.210401,
        226656.416925,
        226656.416925
      ]
    }
  ]

  const duration = [
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "◴"
  ]

  const chartOptions = {
    chart: {
      type: "column"
    },
    title: {
      text: 'Column Comparison',
      align: 'center'
    },
    tooltip: {
      backgroundColor: "#FFFF00",
      borderWidth: 0,
      shadow: true,
      useHTML: true,
      valueDecimals: 2,
      valueSuffix: ' MW',
      headerFormat: `<span>
                      {series.name}
                    </span>
                    <hr>
                    `,
      pointFormat: `<span>
                      {point.y}
                    </span>`
    },
    series: [
      {
        type: "column",
        pointPlacement: 0.2,
        color: '#00FFFF',
        data: data[0]["data"],
        name: 'Design Load Peak'
      },
      {
        type: "column",
        name: 'Measured Peak',
        color: '#FFC0CB',
        data: data[1]["data"]
      }
    ],
    legend: {
      enabled: true,
    },
    xAxis: {
      categories: duration,
      labels: {
        useHTML: true,
        format: "",
        style: {
          textAlign: 'center'
        }
      }
    },
    yAxis: {
      title: {
        text: 'MW'
      },
    },
  }

  return (
    <Chart
      ChartOptions={chartOptions}
    />
  );
};

export default ColumnComparisonChart;