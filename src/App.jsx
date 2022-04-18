import { useState, useEffect } from 'react';
import Header from './components/Header';
import KanaDiv from './components/KanaDiv';
import hiragana from './data/hiragana';
import katakana from './data/katakana';
import KanaExplanation from './components/KanaExplanation';

function App() {
  const [kanaStudy, setKanaStudy] = useState([]);

  function addPickedKana() {
    let inputs = document.querySelectorAll('input');
    let pickedArr = [];
    let tempHiragana = [];
    let tempKatakana = [];

    inputs.forEach((input) => {
      if (input.checked === true) {
        pickedArr.push(parseInt(input.id));
      }
    });

    hiragana.forEach((hiragana) => {
      pickedArr.forEach((id) => {
        if (hiragana.id === id) {
          tempHiragana.push(hiragana.kana);
        }
      });
    });

    katakana.forEach((katakana) => {
      pickedArr.forEach((id) => {
        if (katakana.id === id) {
          tempKatakana.push(katakana.kana);
        }
      });
    });

    let tempConvertedHiragana = [].concat(...tempHiragana);
    let tempConvertedKatakana = [].concat(...tempKatakana);
    let kanaStudy = tempConvertedHiragana.concat(tempConvertedKatakana);

    setKanaStudy(kanaStudy);
    console.log(kanaStudy);
  }

  return (
    <main className="min-h-screen bg-slate-800 text-white text-center">
      <Header />

      <section className="mb-10">
        <div className="kana-div">
          <KanaDiv kanas={hiragana} />
        </div>
        <div className="kana-div">
          <KanaDiv kanas={katakana} />
        </div>

        <button className="button" onClick={addPickedKana}>
          Start
        </button>
      </section>
      <section>
        <KanaExplanation />
      </section>
    </main>
  );
}

export default App;
