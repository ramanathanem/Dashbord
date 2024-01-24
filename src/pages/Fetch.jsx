import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Media from "../Assets/media.png"
import Instagram from "../Assets/instagram.png"
import twiter from "../Assets/twitter.png"
import Facebook from "../Assets/facebook.png"
function Fetch() {
    const [data, setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='container '>
        <div className='row'>
        <div className='col-lg-7 col-md-7 col-md-7'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        data.map((users,index)=>{
                            return <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
        <div className='col-lg-7 col-md-7 col-sm-7'>
        <div class="card" style={{height:"50px"}}>
  <img class="card-img-top" src={Media} alt="Card image cap"/>
  <div class="card-body">
  <h5 class="card-title text-center">John Doe</h5>
  <h5 class="card-title text-center">CEO</h5>
  <img class="card-img-top me-2 "style={{height:"10px",width:"20px"}} src={Instagram} alt="Card image cap"/>
  <img class="card-img-top me-2"style={{height:"10px",width:"20px"}} src={twiter} alt="Card image cap"/>
  <img class="card-img-top me-2"style={{height:"10px",width:"20px"}} src={Facebook} alt="Card image cap"/>
   
  </div>
</div>

        </div>

    </div>
  )
}

export default Fetch