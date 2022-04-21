import React from 'react';

function KanaExplanation() {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-6">What are Kana?</h2>
      <div className="text-xl lg:w-4/5 w-11/12 m-auto">
        <p className="mb-6 leading-7">
          The modern Japanese writing system uses a combination of logographic
          <span className="kanji"> kanji</span>, which are adopted Chinese
          characters, and syllabic kana. Kana itself consists of a pair of
          syllabaries: <span className="hiragana"> hiragana</span>, used
          primarily for native or naturalised Japanese words and grammatical
          elements; and <span className="katakana"> katakana</span>, used
          primarily for foreign words and names, loanwords, onomatopoeia,
          scientific names, and sometimes for emphasis. Almost all written
          Japanese sentences contain a mixture of kanji and kana.
          <a
            href="https://en.wikipedia.org/wiki/Japanese_writing_system"
            className="m-2 text-cyan-500"
            target="_blank"
          >
            [1]
          </a>
        </p>
        <div className="flex mb-6 justify-center ">
          <div className="w-4 h-4 bg-teal-500 m-2 xl:ml-4 "></div>
          <p>Kanji</p>
          <div className="w-4 h-4 bg-amber-300 m-2 xl:ml-4 "></div>
          <p>Hiragana</p>
          <div className="w-4 h-4 bg-pink-500 m-2 xl:ml-4 "></div>
          <p>Katakana</p>
        </div>

        <p className="pb-12">
          <span className="kanji">私</span>
          <span className="hiragana">は</span>
          <span className="katakana">ギリシャ</span>
          <span className="kanji">国</span>
          <span className="hiragana">に</span>
          <span className="kanji">住</span>
          <span className="hiragana">んでいます</span>
        </p>
      </div>
    </div>
  );
}

export default KanaExplanation;
