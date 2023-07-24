import './App.css'
import ColumnComparisonChart from './components/columncomparison/index'
import LineColumn from './components/linecolumn'
import Scatter from './components/scatter'

function App() {

  return (
    <div id="app">
      <ColumnComparisonChart/>
      <LineColumn/>
      <Scatter/>
    </div>
  )
}

export default App
