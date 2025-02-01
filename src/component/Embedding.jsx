import React from 'react'
import { useRef , useState } from 'react'
import './Embedding.css'
const Embedding = (props) => {


  return (
    <div className='main-embedded'>
      <div  ref={props.embedded}  className='text-embedded'>
      </div>
    </div>
  )
}

export default Embedding
