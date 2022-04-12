import { useState, useEffect } from 'react';
import Header from './components/Header';
import hiragana from './data/hiragana';
import katakana from './data/katakana';

function App() {
  const hiraganaDiv = hiragana.map((hiragana) => {
    return (
      <div id={hiragana.id} className="m-5 flex flex-col justify-end">
        {hiragana.kana.map((kana) => {
          return (
            <>
              <p className="font-bold">{kana[0].hiragana}</p>
              <p className="text-slate-400">{kana[0].romanji}</p>
            </>
          );
        })}
        <input type="checkbox" className="mt-6" />
      </div>
    );
  });

  const katakanaDiv = katakana.map((katakana) => {
    return (
      <div id={katakana.id} className="m-5 flex flex-col justify-end">
        {katakana.kana.map((kana) => {
          return (
            <>
              <p className="font-bold">{kana[0].katakana}</p>
              <p className="text-slate-400">{kana[0].romanji}</p>
            </>
          );
        })}
        <input type="checkbox" className="mt-6" />
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <Header />

      <div className="kana-div">{hiraganaDiv}</div>
      <div className="kana-div">{katakanaDiv}</div>

      <button className="button">Start</button>
    </div>
  );
}

export default App;
