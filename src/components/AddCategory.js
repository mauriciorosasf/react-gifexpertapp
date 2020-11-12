import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleinputchange=(e)=>{
setInputValue(e.target.value);
    }
    const handlesumbit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
        setCategories(cats => [inputValue,...cats]);
        setInputValue('');
        }
    }
    return (
        <><form onSubmit={handlesumbit}>
       
           <input type="text" value={inputValue} onChange={handleinputchange}
           /> 
           </form>
        </>
    )
}
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
