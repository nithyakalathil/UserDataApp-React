import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {

    const [data,changedata]=useState(
        {"users":[]}
    )
    
    const fetchdata=()=>{
        axios.get("https://dummyjson.com/users").then(
            (response)=>{
                changedata(response.data)
            }
        )
    }
    
    useEffect(()=>{fetchdata()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">firstName</th>
      <th scope="col">phone</th>
      
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {data.users.map((value,index)=>{
        return <tr>
        <th scope="row">{value.firstName}</th>
        <td>{value.phone}</td>
        
      </tr>
    })}
   
  </tbody>
</table>

        </div>
    </div>
</div>



    </div>
  )
}

export default ViewAll