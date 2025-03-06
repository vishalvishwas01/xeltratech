import React from 'react'

const PackageCard = ({image,heading,para,hyperlink}) => {
  return (
    <div>
          <div>
                <img src={image}/>
          </div>
          <p>{heading}</p>
          <p>{para}</p>
    </div>
  )
}

export default PackageCard