import React from 'react'
import {Chart as ChartJS, defaults} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import doughnut from './doughnutdata.json';
defaults.maintainAspectRatio=false;
defaults.responsive=true;

defaults.plugins.title.display=true;
defaults.plugins.title.color='black';
defaults.plugins.title.align='start';
defaults.plugins.title.font.size='20';


const Doughnutchart = () => {
  return (
    <>
     <div  style={{width:'600px', height:'400px'}}>
        <Doughnut
         data={{
          labels:doughnut.map((doughnutdat)=>doughnutdat.label),
          datasets:[{label:'Cars',data:doughnut.map((doughnutdat)=>doughnutdat.data),
          backgroundColor:["rgba(43,63,229,0.8)","rgba(250,192,19,0.8)","rgba(263,135,13,0.8)","rgba(250,65,78,0.8)"],
        borderRadius:10}]
         }}
         options={{
          plugins:{
            title:{
              text:'Doughnut chart'
            }
          },
          animation:{
            duration:1000,delay:0,loop:true,easing:'easeOutQuart'
          },
         }}
        />
     </div>
    </>
  )
}

export default Doughnutchart