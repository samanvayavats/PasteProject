import React from 'react'
import './HeaderForm.css'
const HeaderForm = () => {
    return (
        <div>
            <form >
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
                <input className='search-input' type="text" placeholder='Title' />
                <button className='create-paste'>Create Paste</button>
                </div>
            </form>
        </div>
    )
}

export default HeaderForm
