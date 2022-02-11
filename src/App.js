
import './App.css';
import { useState, } from 'react';
import {marked}from 'marked'
function App() {
  const [text,setText] = useState('# heading\nparagraph\n# H2\n**BOLDED**\n* list item\n[Visit my webpage](www.com.com)\n*inline`<div><div>`\n```\nlet x = 10 ```')

  const handleChange = (e) =>{
setText(e.target.value)

  }
  const markdown = marked(text, {breaks:true})
  return (
    <div className="App">
      <div className='container'>
 <h1>Markdown Previewer</h1>
 <div>
<textarea  className='input' value={text} onChange={handleChange}></textarea>
 </div>
 <div className='output' dangerouslySetInnerHTML={{__html:markdown}}></div>
 </div>
 

    </div>
  );
}

export default App;
