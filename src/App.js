import  './App.css';
import Barchart from './Charts/Barchart';
import Doughnutchart from './Charts/Doughnutchart';
import Linechart from './Charts/Linechart';
import {Chart as ChartJS, defaults} from 'chart.js'
defaults.maintainAspectRatio=false;
defaults.responsive=true;

defaults.plugins.title.display=true;
defaults.plugins.title.font.size='20';
defaults.plugins.title.align='start';
defaults.plugins.title.color='black';
function App() {
  return (
    <div className="App">
      <Barchart></Barchart>
      <Linechart></Linechart>
      <Doughnutchart></Doughnutchart>
    </div>
  );
}

export default App;
