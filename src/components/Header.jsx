import React from 'react';

function Header({ handleStudyingState }) {
  function handleChangeStudyingState() {
    handleStudyingState();
  }

  return (
    <header className="p-4 mb-2">
      <h1
        className="text-2xl font-bold uppercase cursor-pointer"
        onClick={handleChangeStudyingState}
      >
        Kana Study
      </h1>
    </header>
  );
}

export default Header;
