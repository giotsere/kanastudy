import React from 'react';

function KanaDiv({ outerkana }) {
  const div = outerkana.map((innerkana) => {
    return (
      <div key={innerkana.id * 3} className="m-5 flex flex-col justify-end">
        {innerkana.kana.map((kana) => {
          return (
            <>
              <p className="font-bold">{kana[0].kana}</p>
              <p className="text-slate-400">{kana[0].romanji}</p>
            </>
          );
        })}
        <input id={innerkana.id} type="checkbox" className="mt-6" />
      </div>
    );
  });

  return div;
}

export default KanaDiv;
