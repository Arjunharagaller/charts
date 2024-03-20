import React from 'react';
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2';
import barchart from './bardata.json'


const Barchart = () => {
  return (
    <>
     <div style={{width:'600px', height:'400px'}}>
     <Bar
      data={{
        labels:barchart.map((bardata)=>bardata.label),
        datasets:[
               {label:'Car',
                data:barchart.map((bardata)=>bardata.data),
                backgroundColor:["rgba(43,63,229,0.8)","rgba(250,192,19,0.8)","rgba(263,135,13,0.8)","rgba(250,65,78,0.8)"],
                barPercentage:0.3,
                borderSkipped:'middle',
                borderRadius:20,
                hoverBackgroundColor:'grey',
                hoverBorderColor:'black',
                borderWidth:3,
                borderColor:'transparent'
              }
             ]
             
      }}
      options={{
        plugins:{
            title:{
                text:'Bar Chart'
            }
        },
        animation:{
            delay:0,
            duration:1000,
            easing:'easeOutQuart',
            loop:true
        },
      }}
     />
     </div>
    </>
  )
}

export default Barchart