import React from 'react'
import { useParams } from 'react-router-dom'

const Hotel = () => {
    const param= useParams();
    // console.log(param.id)
  return (
    <div>Hotel {param.id}</div>
  )
}

export default Hotel