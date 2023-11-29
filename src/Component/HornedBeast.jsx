/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'


function HornedBeast ( props ) {

    return(
        <>
        <h2>{props.title}</h2>
        <img src={props.imageUrl} alt=''></img>
        <p>{props.description}</p>
</>
    )
}

export default HornedBeast;