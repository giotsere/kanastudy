import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white w-fit m-auto text-center pb-6">
      <p className="mb-4">
        Made by
        <a
          href="https://www.github.com/giotsere"
          target="_blank"
          className="footer_p"
        >
          Giorgi Tsereteli
        </a>
      </p>

      <a
        href="https://www.github.com/giotsere/kanastudy"
        target="_blank"
        className="footer_p"
      >
        Source Code
      </a>
    </footer>
  );
}

export default Footer;
