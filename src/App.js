import React, { useState } from 'react';

function App() {

  const [alphabetCounter, setCounter] = useState({
    'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
  })

  const [bracelets, setBracelets] = useState(Array)

  const countLetters = (value) => {
    value = value.replaceAll(" ","")
    value.split("").forEach((letter) => {
      alphabetCounter[letter]++
      setCounter((alphabetCounter) => { return alphabetCounter })
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let value = event.target.text.value
    if(value.replaceAll(" ","").length >= 1)
      setBracelets([...bracelets, value]);
    countLetters(value)
  }

  return (
    <div className='main'>
      <container>

        <form onSubmit={handleSubmit}>
          <label>Bracelet Text:</label>
          <input type="text" name="text" />
          <input type="submit" value="Submit" />
        </form>

        <div className="bracelets">
          BRACELETS:
          {
            Object.entries(bracelets).map(([key, text]) => {
              return <p className='bracelet'>{text}</p>
            })
          }
        </div>
      </container>

      <container>
        <label>TOTAL BEADS:</label>
        <div className='counter'>

          {
            Object.entries(alphabetCounter).map(([letter, count]) => {
              return <p>{letter}: {count} </p>
            })
          }
        </div>
      </container>
    </div>
  );
}

export default App;
