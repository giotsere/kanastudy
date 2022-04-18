import React from 'react';

function KanaDiv({ kanas }) {
  const div = kanas.map((kana) => {
    return (
      <div id={kana.id} className="m-5 flex flex-col justify-end">
        {kana.kana.map((kana) => {
          return (
            <>
              <p className="font-bold">{kana[0].kana}</p>
              <p className="text-slate-400">{kana[0].romanji}</p>
            </>
          );
        })}
        <input id={kana.id} type="checkbox" className="mt-6" />
      </div>
    );
  });

  return div;
}

export default KanaDiv;
