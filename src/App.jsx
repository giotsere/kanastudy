import { useState, useEffect } from 'react';
import Header from './components/Header';
import KanaDiv from './components/KanaDiv';
import hiragana from './data/hiragana';
import katakana from './data/katakana';
import KanaExplanation from './components/KanaExplanation';
import Study from './components/Study';

function App() {
  const [kanaStudy, setKanaStudy] = useState([]);
  const [studying, setStudying] = useState(false);
  const [hiraganaChecked, setHiraganaChecked] = useState(false);
  const [katakanaChecked, setKatakanaChecked] = useState(false);

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

    if (pickedArr.length != 0) {
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
      setStudying(true);
    } else {
      alert('Pick Kana');
    }
  }

  function makeHiraganaChecked() {
    if (hiraganaChecked === false) {
      let inputs = document.querySelectorAll('input');
      inputs.forEach((input) => {
        if (input.parentElement.parentElement.classList.contains('hira')) {
          input.checked = true;
        }
      });
      setHiraganaChecked(true);
    } else {
      let inputs = document.querySelectorAll('input');
      inputs.forEach((input) => {
        if (input.parentElement.parentElement.classList.contains('hira')) {
          input.checked = false;
        }
      });
      setHiraganaChecked(false);
    }
  }

  function makeKatakanaChecked() {
    if (katakanaChecked === false) {
      let inputs = document.querySelectorAll('input');
      inputs.forEach((input) => {
        if (input.parentElement.parentElement.classList.contains('kata')) {
          input.checked = true;
        }
      });
      setKatakanaChecked(true);
    } else {
      let inputs = document.querySelectorAll('input');
      inputs.forEach((input) => {
        if (input.parentElement.parentElement.classList.contains('kata')) {
          input.checked = false;
        }
      });
      setKatakanaChecked(false);
    }
  }

  function changeStates() {
    setStudying(false);
    setHiraganaChecked(false);
    setKatakanaChecked(false);
  }

  return (
    <main className="min-h-screen bg-slate-800 text-white text-center">
      <Header changeStates={changeStates} />

      {studying ? (
        <Study kanaStudy={kanaStudy} />
      ) : (
        <>
          <section className="mb-10">
            <h2 className="text-xl font-bold uppercase mb-6">Hiragana</h2>
            <div className="kana-div">
              <div className="flex flex-wrap hira">
                <KanaDiv outerkana={hiragana} />
              </div>
              <button className="button" onClick={makeHiraganaChecked}>
                {hiraganaChecked ? 'Uncheck All' : 'Check All'}
              </button>
            </div>
            <h2 className="text-xl font-bold uppercase mb-6">Katakana</h2>
            <div className="kana-div">
              <div className="flex flex-wrap kata">
                <KanaDiv outerkana={katakana} />
              </div>
              <button className="button" onClick={makeKatakanaChecked}>
                {katakanaChecked ? 'Uncheck All' : 'Check All'}
              </button>
            </div>

            <button className="button" onClick={addPickedKana}>
              Start
            </button>
          </section>
          <section>
            <KanaExplanation />
          </section>
        </>
      )}
    </main>
  );
}

export default App;
