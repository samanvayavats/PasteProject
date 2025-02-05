import React, { useState ,useRef} from 'react';
import './Content.css';

const Content = (props) => {

  function writingText(e) {
    const value = e.target.value;
    props.setText(value);  // Use the latest value
    
  }

  return (
    <div className='main-content'>
      <textarea className="input-content" onChange={writingText} ></textarea>
    </div>
  );
}

export default Content;
