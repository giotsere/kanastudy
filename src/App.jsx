import { useState, useEffect } from 'react';
import Header from './components/Header';
import KanaDiv from './components/KanaDiv';
import hiragana from './data/hiragana';
import katakana from './data/katakana';

function App() {
  const [picked, setPicked] = useState([]);

  function getId(id) {
    console.log(id);
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <Header />

      <div className="kana-div">
        <KanaDiv kanas={hiragana} getId={getId} />
      </div>
      <div className="kana-div">
        <KanaDiv kanas={katakana} getId={getId} />
      </div>

      <button className="button">Start</button>
    </div>
  );
}

export default App;
