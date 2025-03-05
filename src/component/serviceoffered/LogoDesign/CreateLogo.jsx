import React from 'react'
import "./CreateLogo.css"
import CreateLogoBanner from "./images/CreateLogoBanner.png"

function CreateLogo() {
  return (
    <div className='CreateLogo-body'>
      <div className='CreateLogo-box'><img src={CreateLogoBanner}/></div>
    </div>
  )
}

export default CreateLogo
