import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exporting from "highcharts/modules/exporting.js";

import './chart.css'

exporting(Highcharts)

const Chart = (ChartOptions: Options) => {
  return (
    <div className='chart'>
      <HighchartsReact
        highcharts={Highcharts}
        options={ChartOptions.ChartOptions}
      />    
    </div>
  )
}

export default Chart