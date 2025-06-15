import './WordCheck.css';
import { useState } from 'react';

function WordCheck() {
  const [word, setWord] = useState('');
  const [correct, setCorrect] = useState(null);

  const checkWord = event => {
    setWord(event.target.value);
  };

  function handleCheck() {
    if (word.toLowerCase() === 'cat') {
      setCorrect(true);
      setWord('');
    } else {
      setCorrect(false);
      setWord('');
    }
  }

  return (
    <div
      className={`container ${
        correct === true ? 'correct-active' : correct === false ? 'correct-red' : ''
      }`}
    >
      <span className="span">task-3</span>
      <h1>Word Check</h1>
      <div className="img__wrapper"></div>
      <p>Кот</p>
      <input type="text" placeholder="Введите слово" value={word} onChange={checkWord} />
      <button onClick={handleCheck}>Check</button>

      {correct === true && <p>Very Good!</p>}

      {correct === false && <p>Try again!</p>}
    </div>
  );
}

export default WordCheck;
