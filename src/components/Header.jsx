import React from 'react';

function Header({ changeStates }) {
  function handleChangeStates() {
    changeStates();
  }

  return (
    <header className="p-4 mb-2">
      <h1
        className="text-2xl font-bold uppercase cursor-pointer"
        onClick={handleChangeStates}
      >
        Kana Study
      </h1>
    </header>
  );
}

export default Header;
