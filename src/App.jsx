import { useState , useRef} from 'react';
import './App.css';
import HeaderForm from './component/HeaderForm.jsx'
import Content from './component/content.jsx';
import Embedding from './component/Embedding.jsx';
function App() {
  const [Text, setText] = useState("")
   const embedded = useRef()
  const [Display, setDisplay] = useState([])
  const [Title, setTitle] = useState('')
  function textPaste() {
    if(Text == '' || Title ==''){
      alert('Please write something in the paste or in the title')
      return
    }
      if (embedded.current) {
      embedded.current.innerText = Text; 
    }

    setDisplay([...Display, <Embedding key={Display.length} Text={Text} setText={setText} embedded={embedded} />]);
  }


  return (
    <div className='app-main'>
      <HeaderForm Text={Text} setText ={setText} Title ={Title} setTitle={setTitle}/>
      <Content Text={Text} setText ={setText}  />
      <button className='main-btn' onClick={textPaste}>Create paste</button>
       {Display.map((e) => e)}
    </div>
  );
}

export default App;
