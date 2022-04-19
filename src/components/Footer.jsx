import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white w-fit m-auto text-center pb-6">
      <p className="mb-4">
        Made by
        <a
          href="https://www.github.com/giotsere"
          target="_blank"
          className="pl-2 font-bold hover:underline underline-offset-4 decoration-4 decoration-rose-600"
        >
          Giorgi Tsereteli
        </a>
      </p>

      <a
        href="https://www.github.com/giotsere/kanastudy"
        target="_blank"
        className="inline-block"
      >
        <img src="src/assets/github.png" alt="" width="48px" height="48px" />
      </a>
    </footer>
  );
}

export default Footer;
