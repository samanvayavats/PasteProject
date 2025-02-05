import React, { useState } from 'react';
import './HeaderForm.css';

const HeaderForm = (props) => {
    function enterTilte(e){
        const value = e.target.value;
        props.setTitle(value);  // Use the latest value
    }

    return (
        <div>
            <form className='form-div'>
                <div className='header-div'>
                     <h1 className='header-div-h1'>CREATE YOUR OWN PASTE</h1>
                </div>
                <div className='header-div'>
                <input className='search-input' type="text" placeholder='Title' onChange={enterTilte} />
                </div>
            </form>
        </div>
    )
}

export default HeaderForm;
