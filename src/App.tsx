import React from 'react';
import './styles/App.css';
import { Post } from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Post />
      </header>
    </div>
  );
}

export default App;
