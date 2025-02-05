import React, { useRef, useEffect } from 'react';
import './Embedding.css';

const Embedding = ({ id, Text, handleDelete, Title }) => {
  const embeddedRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.innerText = Title;
    }
    if (embeddedRef.current) {
      embeddedRef.current.innerText = Text;
    }
  }, [Text, Title]);

  return (
    <div className='main-embedded'>
      <div>
        <h4 ref={headingRef} className='heading-embedded'></h4>
        <div ref={embeddedRef} className='text-embedded'></div>
      </div>
      <button className='delete-embedded' onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Embedding;
