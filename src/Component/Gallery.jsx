/* eslint-disable no-unused-vars */
import React from 'react'
import HornedBeast from './HornedBeast'



function Gallery() {

    return(
        <>
            
        <HornedBeast 
        title={'this is my title'}
        imageUrl={'https://content.fortune.com/wp-content/uploads/2015/08/fortune-1508284.jpg?w=840'}
        description={'this is a description'}/>
        <HornedBeast />
        
        </>
    )
}

export default Gallery;