import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title,ArcElement, Tooltip,LineElement, Legend, CategoryScale, LinearScale, PointElement,  Filler } from 'chart.js';
import { Pie } from 'react-chartjs-2'
import { useState, } from 'react';
ChartJS.register(
    Title,Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement,Filler,  ArcElement
)
import axios from "axios"

function Dashboard() {

    const datas={
        
        labels:['one','Two','Three','Four','Five'],
        datasets:[{
            data:[3,6,9,12,15],
            backgroundColor:['aqua','bloodorange','purple','blue','gray']
        }]
    
    }
    const options={}
      const [data, setData]=useState({
     labels:["Jan","Fab","March","April","May","June","July","August","september","Oct","Nov","Dec"],
     datasets:[{
        label:"First Dataset",
        data:[10,20,30,42,51,82,31,59,61,73,91,58],
        backgroundColor:'white',
        borderColor:"blue",
        tension:0.4,
        fill:true,
        pointStyle:'star',
        pontBorderColor:'#fff'
      
     }]
    
      })
    
  return (
  <div className='conatiner'>
<div className='row'>
  <div className='col-sm'>
  <h1>Good Morning!</h1>
    <p class="card-text" style={{height:"400px",width:"600px"}} ><Line data={data}>Hello</Line></p>
  </div>
  
  <div className='col-sm' style={{height:"400px", width:"400px"}}>
  <Pie
        data={datas}
        options={options}>

        </Pie>

  </div>
</div>
  </div>
     
  )
}

export default Dashboard