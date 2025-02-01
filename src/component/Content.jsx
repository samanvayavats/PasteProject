import React from 'react'
import { useState } from 'react'
import './Content.css'
const content = (props) => {
  const [TempText, setTempText] = useState('')
  function writngText(e){
     setTempText(e.target.value);
     props.setText(TempText)
     console.log(props.Text)
  }


  return (
    <div className='main-content'>
      <textarea className="input-content"
      onChange={writngText}></textarea>
    </div>
  )
}

export default content

