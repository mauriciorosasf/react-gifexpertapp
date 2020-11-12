import React, { useState,useEffect } from 'react'
import { getGifts } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({category}) => {
   
 const {data:images,loading} = useFetchGifs(category);

    return (
        <>
        <h3  className="card animate__animated animate__fadeIn">{category}</h3>
        {loading && <p  className="card animate__animated animate__flash" >cargando..</p>}
        <div className="card-grid">
            
            {images.map(image=>
         <GifGridItem key={image.id} {...image}/>
    )}
        </div>
        </>
    )
}
