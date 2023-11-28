/* eslint-disable no-unused-vars */
import React from 'react'
import HornedBeast from './HornedBeast'



function Gallery() {

    return(
        <>
            
        <HornedBeast 
        title={'Unicorn'}
        imageUrl={'https://content.fortune.com/wp-content/uploads/2015/08/fortune-1508284.jpg?w=840'}
        description={'A mythical creature everyone (most people) love'}/>

        <HornedBeast 
        title={'Narwhale'}
        imageUrl={'https://ocean.si.edu/sites/default/files/styles/full_width_largest/public/%28GW%29-narwhal-tusk.jpg.webp?itok=C1qKlvGn'}
        description={'Imagine the toothache on this creature'}/>
        
        </>
    )
}

export default Gallery;