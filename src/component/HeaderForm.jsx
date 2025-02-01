import React, { useState } from 'react'
import './HeaderForm.css'
const HeaderForm = (props) => {
    const [tempTitle, settempTitle] = useState('')
    function enterTilte(e){
        settempTitle(e.target.value)
        props.setTitle(tempTitle)
        console.log(props.Title)
    }

    return (
        <div>
            <form className = 'form-div'>
                <div className='header-div'>
                <select  className="header-select">
                    <option value="">Code</option>
                    <option value="dog">json</option>
                    <option value="cat">text</option>
                </select>
                
                <select  className="header-select">
                    <option value="">1 Month</option>
                    <option value="dog">1 Year</option>
                    <option value="cat">Never</option>
                </select>

                <select  className="header-select">
                    <option value="">Private</option>
                    <option value="dog">Public</option>
                </select>

                </div>
                <div className='header-div'>
                <input className='search-input' type="text" placeholder='Title' onChange={enterTilte}/>
                </div>
            </form>
        </div>
    )
}

export default HeaderForm
