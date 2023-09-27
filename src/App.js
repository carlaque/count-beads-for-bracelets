import React, { useState } from "react";

function App() {
  const [alphabetCounter, setCounter] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  });

  const [bracelets, setBracelets] = useState(Array);

  const countLetters = (value) => {
    value = value.replaceAll(" ", "");
    value.split("").forEach((letter) => {
      alphabetCounter[letter]++;
      setCounter((alphabetCounter) => {
        return alphabetCounter;
      });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let value = event.target.text.value;
    if (value.replaceAll(" ", "").length >= 1)
      setBracelets([...bracelets, value]);
    countLetters(value);
  };

  return (
    <div className="main">
      <container>
        <div className="main-container">
          <h1>make your friendship bracelets</h1>
          <form onSubmit={handleSubmit}>
            <label>enter your text:</label>
            <input type="text" name="text" />
            <input className="button" type="submit" value="submit" />
          </form>
          <div className="bracelets">
            <div className="bracelets-label">bracelets:</div>
            <div className="bracelets-container"></div>
            {Object.entries(bracelets).map(([key, text]) => {
              return <p className="bracelet">{text}</p>;
            })}
          </div>
        </div>
      </container>

      <container>
        <label>total beads:</label>
        <div className="counter">
          {Object.entries(alphabetCounter).map(([letter, count]) => {
            return (
              <p>
                {letter}: {count}{" "}
              </p>
            );
          })}
        </div>
      </container>
    </div>
  );
}

export default App;
