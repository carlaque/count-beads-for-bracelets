import React, { useEffect, useState } from 'react';

function App() {

  const [alphabetCounter, setCounter] = useState({
    'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
  })

  const [bracelets, setBracelets] = useState(Array)

  const countLetters = (value) => {
    value.split("").forEach((letter) => {
      alphabetCounter[letter]++
      setCounter((alphabetCounter) => { return alphabetCounter })
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let value = event.target.text.value
    setBracelets([...bracelets, value]);
    countLetters(value)
  }

  return (
    <main>
      <container>

        <form onSubmit={handleSubmit}>
          <label>
            Bracelet Text:
            <input type="text" name="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {
          Object.entries(bracelets).map(([key, text]) => {
            return <div>{text}</div>
          })
        }
      </container>

      <aside>
        TOTAL BEADS:
        {
          Object.entries(alphabetCounter).map(([letter, count]) => {
            return <div>{letter}{count}</div>
          })
        }
      </aside>
    </main>
  );
}

export default App;
