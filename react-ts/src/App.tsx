import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const test = 'asdf';
  return (
    <div className="App">
      <header
        className="App-header"
        id="asdfasdfadfasdf"
        title="asdf asdkfajsdkf asdf"
      >
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {'Edit '}
          <code>{'src/App.tsx'}</code> {'and save to reload.'}
        </p>
        <img src="https://glowing.com/1.jpg" alt={test} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Learn React'}
        </a>
        <button type="reset">{'test'}</button>
      </header>
    </div>
  );
}

export default App;
