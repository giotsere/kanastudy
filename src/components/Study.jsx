import React from 'react';
import { useState, useEffect } from 'react';

function Study({ kanaStudy }) {
  const [currentKana, setCurrentKana] = useState(0);
  const [input, setInput] = useState('');
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [error, setError] = useState('');

  function setRandomKana() {
    const randomIndex = Math.floor(Math.random() * kanaStudy.length);
    setCurrentKana(randomIndex);
  }

  useEffect(() => {
    setRandomKana();
    setMaxStreak(localStorage.getItem('maxStreak') || 0);
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.toLocaleLowerCase() === kanaStudy[currentKana][0].romanji) {
      setStreak(streak + 1);
      setMaxStreak(Math.max(streak + 1, maxStreak));
      setInput('');
      setError('');
      setRandomKana();
      localStorage.setItem('maxStreak', Math.max(streak + 1, maxStreak));
    } else {
      setStreak(0);
      setError(
        `Wrong! The answer for the kana ${kanaStudy[currentKana][0].kana} is ${kanaStudy[currentKana][0].romanji}`
      );
      setRandomKana();
    }
  }

  return (
    <div className="h-screen">
      <p className="mb-8 text-4xl">
        {streak} / {maxStreak}
      </p>
      <div className="flex flex-col h-4/5 justify-center">
        <p className="mb-12 text-8xl">{kanaStudy[currentKana][0].kana}</p>
        <form onSubmit={handleSubmit} className="mb-12">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            className="input"
          />
        </form>
        <p className="text-rose-600">{error}</p>
      </div>
    </div>
  );
}

export default Study;
