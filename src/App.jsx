import { useState, useEffect } from 'react';
import Header from './components/Header';
import KanaDiv from './components/KanaDiv';
import hiragana from './data/hiragana';
import katakana from './data/katakana';
import KanaExplanation from './components/KanaExplanation';

function App() {
  const [picked, setPicked] = useState([]);

  function getId(id) {
    console.log(id);
  }

  return (
    <main className="min-h-screen bg-slate-800 text-white text-center">
      <Header />

      <section className="mb-10">
        <div className="kana-div">
          <KanaDiv kanas={hiragana} getId={getId} />
        </div>
        <div className="kana-div">
          <KanaDiv kanas={katakana} getId={getId} />
        </div>

        <button className="button">Start</button>
      </section>
      <section>
        <KanaExplanation />
      </section>
    </main>
  );
}

export default App;
