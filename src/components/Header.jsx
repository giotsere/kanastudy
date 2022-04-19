import React from 'react';

function Header({ setStudying }) {
  return (
    <header className="p-4 mb-2">
      <h1
        className="text-2xl font-bold uppercase cursor-pointer"
        onClick={() => {
          setStudying(false);
        }}
      >
        Kana Study
      </h1>
    </header>
  );
}

export default Header;
