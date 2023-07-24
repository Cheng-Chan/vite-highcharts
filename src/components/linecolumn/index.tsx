import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exporting from "highcharts/modules/exporting.js";

import './index.css';

exporting(Highcharts)

const LineColumn = () => {

    const data = {
      "first": [
      10897520.168884,
      11748611.946475,
      15635032.449302,
      32148585.643848,
      53375500.224224,
      74030706.519853,
      84580678.017479,
      73580313.138315,
      65913262.29666,
      33876933.1495,
      17217191.21151,
      10937634.629777
      ],
      "second": [
      9865730.862255,
      11284465.152336,
      16202299.559484,
      22243480.540367,
      41189213.441721,
      89452769.767307,
      72959631.123764,
      65276443.005281,
      53047147.743313,
      30885958.318957,
      15172837.025052,
      10192958.229005
      ],
      "months": [
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
      ]
    }

    const chartOptions: Options = {
      chart: {
          type: 'xy'
      },
      title: {
        text: 'Line & Column Combination',
        align: 'center'
      },
      xAxis: [{
        categories: data.months,
        crosshair: true
      }],
      yAxis: [
        {
          labels: {
            format: '',
            style: {
              color: '#000000'
            }
          },
          title: {
            text: 'GWh',
            style: {
                color: '#D2042D'
            }
          }
        },
        { // Secondary yAxis
          title: {
              text: '',
              style: {
                  color: 'pink'
              }
          },
          labels: {
              format: '',
              style: {
                  color: '#FFFFFF'
              }
          },
          opposite: true
        }
      ],
      legend: {
        align: 'center',
        x: 30,
        verticalAlign: 'top',
        y: 40,
        floating: true,
        backgroundColor: '#FFFFFF'
      },
      series: [
        {
          name: 'Measured',
          type: 'column',
          yAxis: 1,
          data: data.first,
          color: '#FFC0CB'
        }, 
        {
          name: 'Normal Year',
          type: 'spline',
          data: data.second,
          color: '#00FFFF'
        }
      ]
    }

    return (
      <div className='lineColumn'>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    )

};

export default LineColumn;