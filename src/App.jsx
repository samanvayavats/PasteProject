import { useState } from 'react';
import './App.css';
import HeaderForm from './component/HeaderForm.jsx';
import Content from './component/Content.jsx';
import Embedding from './component/Embedding.jsx';

function App() {
  const [Search, setSearch] = useState('');
  const [Text, setText] = useState("");
  const [Title, setTitle] = useState("");
  const [Display, setDisplay] = useState([]);

  function textPaste() {
    if (Text === '' || Title === '') {
      alert('Please write something in the paste or in the title');
      return;
    }

    const newPaste = {
      id: Date.now(),
      text: Text,
      Title: Title
    };

    setDisplay([...Display, newPaste]);
    setText("");
    setTitle("");
  }

  function handleDelete(id) {
    setDisplay(Display.filter(item => item.id !== id));
  }

  function titleChange(e) {
    setSearch(e.target.value);
  }

  function deleteAccordingTitle() {
    setDisplay(Display.filter(item => item.Title == Search)); // Corrected logic
  }

  return (
    <div className='app-main'>
      <HeaderForm Text={Text} setText={setText} Title={Title} setTitle={setTitle} />
      <Content Text={Text} setText={setText} />
      <button className='main-btn' onClick={textPaste}>Create paste</button>
      <div className='search-div-app'>
        <input type="text" className='search-input-app' onChange={titleChange}/>
        <button className='search-btn-app' onClick={deleteAccordingTitle}>Search by Title</button>
      </div>
      {Display.map((item) => (
        <Embedding key={item.id} id={item.id} Text={item.text} handleDelete={handleDelete} Title={item.Title} />
      ))}
    </div>
  );
}

export default App;
