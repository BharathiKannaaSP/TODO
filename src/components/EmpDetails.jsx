import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EmpDetails() {
    const {id} =useParams()
    const [empData,setEmpData] =useState({})
    useEffect(()=>{
        fetch('http://localhost:8000/employee/'+id).then((res)=>{
            return res.json()
        }).then((resp)=>{
            setEmpData(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])
  return (
    <div>EmpDetails
       <p>
        {empData.name}
       </p>
    </div>
  )
}

export default EmpDetails