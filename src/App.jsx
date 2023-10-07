import { useState } from "react";
import text from "./data"
import {nanoid} from 'nanoid';

const App = () => {
  const [paragraph, setParagraph] = useState(1)
  const [lorem, setLorem] = useState([])



  const handleSubmit= (e) =>{
    e.preventDefault()

    const amount = parseInt(paragraph)
    setLorem(text.slice(0,amount))
  }


  return <main>
      <div className="container">
        <h4>Tired of boring lorem ipsum ?</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="paragraph">Paragraphs:</label>
          <input type="number" id="paragraph" min={1} max={8} value={paragraph} onChange={(e)=> setParagraph(e.target.value)}/>
          <input type="submit" value="Generate" />
        </form>
      {lorem.map((paragraph)=>{
        const id= nanoid()
        return <div key={id} className="paragraphs">
          <p>{paragraph}</p>
        </div> 

      })}
    </div>
  </main>





};
export default App;
