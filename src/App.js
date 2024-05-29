import { useEffect, useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

const Inner = ({ myCb }) => {

  // const { myCb } = useFoo();
  const myOtherCb = () => { console.log('wow'); };

  useEffect(() => {
    myCb();
    myOtherCb();
  }, [myCb, myOtherCb]);

  return null;
}

function App() {
  const myCb = () => { console.log('foo')};
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter(value => value + 1)}>Click {counter}</button>
      <Inner myCb={myCb} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
