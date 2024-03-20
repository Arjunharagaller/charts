import React from 'react'
import {Chart as ChartJS, } from 'chart.js'
import {Line} from 'react-chartjs-2'
import linedata from './linedata.json';

const Linechart = () => {
  return (
    <>
    <div style={{width:'600px', height:'400px'}}>
        <Line
         data={{
            labels:linedata.map((linedat)=>linedat.label),
            datasets:[
                {
                    label:'Revenue', 
                    data:linedata.map((linedat)=>linedat.revenu), 
                    backgroundColor:'green',
                    borderColor:'green',
                    hoverBackgroundColor:'black'},
                {
                    label:'Cost', 
                    data:linedata.map((linedat)=>linedat.cost),
                    backgroundColor:'red',
                    borderColor:'red',
                    hoverBackgroundColor:'black'
                }]
         }}
         options={{
            plugins:{
                title:{
                    text:'Line chart'
                }
            },
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
              },
              
         }}
        />
    </div>
    </>
  )
}

export default Linechart