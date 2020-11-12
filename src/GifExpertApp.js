import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   
    const [categories,setCategories]= useState(['one punch']);
//     const handleAdd = (serie) =>{
//         let copia=[...categories];
//         copia.push(serie);
// setCategories(copia);
//     }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={()=>handleAdd('megaman')}>Agregar</button> */}
    <ol>{categories.map(category=><GifGrid key={category} category={category}/>
        
    )}</ol>
        </div>
    )
}
