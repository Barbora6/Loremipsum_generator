// https://www.youtube.com/watch?v=iZZ70Nvd4sk&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl&index=25

import { useState} from 'react'
import data from './data'

const App = () => {
  const[count, setCount] = useState(0)
  const[paragraphs, setParagraphs] = useState([])

const submitForm = (e) => {
  e.preventDefault()
  let amount = parseInt(count)

  if(amount < 0){
    amount = 1
  } else if (amount > 5){
    amount = 5
  }
 
  // slice = krájet, vykroj mi z dat prvky od 0 po amount(to co jsme zadali)
  // a uložíme to přes setParagraphs do paragraphs, který vypíšeme
 setParagraphs(data.slice(0, amount))
}

// typeof = zjištění tipu
// převést na číslo ze stringu parseInt(count), nutné se ujistit, že tam posíláme číslo

  return <article className='form-section'>
     <h1>Lorem ipsum generator</h1>
    <form onSubmit={submitForm}>
      <label htmlFor='paragraphs'>Odstavec:</label>
      <input type="number" id='paragraphs' onChange={(e) => {setCount(e.target.value)}} /><br />
      <input type="submit" value='Vygenerovat' />
      {/* value = dává hodnotu políčka */}
    </form>
   <div>
    {paragraphs.map((oneParagraph, index) => {
      return <p key={index}>{oneParagraph}</p>
    })}
   </div>
  </article>
}

export default App