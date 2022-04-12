const katakana = [
  {
    id: 1,
    kana: [
      [{ romanji: 'a', katakana: 'ア' }],
      [{ romanji: 'i', katakana: 'イ' }],
      [{ romanji: 'u', katakana: 'ウ' }],
      [{ romanji: 'e', katakana: 'エ' }],
      [{ romanji: 'o', katakana: 'オ' }],
    ],
    isPicked: false,
  },
  {
    id: 2,
    kana: [
      [{ romanji: 'ka', katakana: 'カ ' }],
      [{ romanji: 'ki', katakana: 'キ' }],
      [{ romanji: 'ku', katakana: 'ク' }],
      [{ romanji: 'ke', katakana: 'ケ' }],
      [{ romanji: 'ko', katakana: 'コ' }],
    ],
    isPicked: false,
  },
  {
    id: 3,
    kana: [
      [{ romanji: 'sa', katakana: 'サ' }],
      [{ romanji: 'shi', katakana: 'シ' }],
      [{ romanji: 'su', katakana: 'ス' }],
      [{ romanji: 'se', katakana: 'セ' }],
      [{ romanji: 'so', katakana: 'ソ' }],
    ],
    isPicked: false,
  },
  {
    id: 4,
    kana: [
      [{ romanji: 'ta', katakana: 'タ' }],
      [{ romanji: 'chi', katakana: 'チ' }],
      [{ romanji: 'tsu', katakana: 'ツ' }],
      [{ romanji: 'te', katakana: 'テ' }],
      [{ romanji: 'to', katakana: 'ト' }],
    ],
    isPicked: false,
  },
  {
    id: 5,
    kana: [
      [{ romanji: 'na', katakana: 'ナ' }],
      [{ romanji: 'ni', katakana: 'ニ' }],
      [{ romanji: 'nu', katakana: 'ヌ' }],
      [{ romanji: 'ne', katakana: 'ネ' }],
      [{ romanji: 'no', katakana: 'ノ' }],
    ],
    isPicked: false,
  },
  {
    id: 6,
    kana: [
      [{ romanji: 'ha', katakana: 'ハ' }],
      [{ romanji: 'hi', katakana: 'ヒ' }],
      [{ romanji: 'fu', katakana: 'フ' }],
      [{ romanji: 'he', katakana: 'ヘ' }],
      [{ romanji: 'ho', katakana: 'ホ' }],
    ],
    isPicked: false,
  },
  {
    id: 7,
    kana: [
      [{ romanji: 'ma', katakana: 'マ' }],
      [{ romanji: 'mi', katakana: 'ミ' }],
      [{ romanji: 'mu', katakana: 'ム' }],
      [{ romanji: 'me', katakana: 'メ' }],
      [{ romanji: 'mo', katakana: 'モ' }],
    ],
    isPicked: false,
  },
  {
    id: 8,
    kana: [
      [{ romanji: 'ya', katakana: 'ヤ' }],
      [{ romanji: 'yu', katakana: 'ユ' }],
      [{ romanji: 'yo', katakana: 'ヨ' }],
    ],
    isPicked: false,
  },
  {
    id: 9,
    kana: [
      [{ romanji: 'ra', katakana: 'ラ' }],
      [{ romanji: 'ri', katakana: 'リ' }],
      [{ romanji: 'ru', katakana: 'ル' }],
      [{ romanji: 're', katakana: 'レ' }],
      [{ romanji: 'ro', katakana: 'ロ' }],
    ],
    isPicked: false,
  },
  {
    id: 10,
    kana: [
      [{ romanji: 'wa', katakana: 'ワ' }],
      [{ romanji: 'wo', katakana: 'ヲ' }],
      [{ romanji: 'n', katakana: 'ン' }],
    ],
    isPicked: false,
  },
  {
    id: 11,
    kana: [
      [{ romanji: 'ga', katakana: 'ガ' }],
      [{ romanji: 'gi', katakana: 'ギ' }],
      [{ romanji: 'gu', katakana: 'グ' }],
      [{ romanji: 'ge', katakana: 'ゲ' }],
      [{ romanji: 'go', katakana: 'ゴ' }],
    ],
    isPicked: false,
  },
  {
    id: 12,
    kana: [
      [{ romanji: 'za', katakana: 'ザ' }],
      [{ romanji: 'ji', katakana: 'ジ' }],
      [{ romanji: 'zu', katakana: 'ズ' }],
      [{ romanji: 'ze', katakana: 'ゼ' }],
      [{ romanji: 'zo', katakana: 'ゾ' }],
    ],
    isPicked: false,
  },
  {
    id: 13,
    kana: [
      [{ romanji: 'da', katakana: 'ダ' }],
      [{ romanji: 'ji', katakana: 'ヂ' }],
      [{ romanji: 'zu', katakana: 'ヅ' }],
      [{ romanji: 'de', katakana: 'デ' }],
      [{ romanji: 'do', katakana: 'ド' }],
    ],
    isPicked: false,
  },
  {
    id: 14,
    kana: [
      [{ romanji: 'ba', katakana: 'バ' }],
      [{ romanji: 'bi', katakana: 'ビ' }],
      [{ romanji: 'bu', katakana: 'ブ' }],
      [{ romanji: 'be', katakana: 'ベ' }],
      [{ romanji: 'bo', katakana: 'ボ' }],
    ],
    isPicked: false,
  },
  {
    id: 15,
    kana: [
      [{ romanji: 'pa', katakana: 'パ' }],
      [{ romanji: 'pi', katakana: 'ピ' }],
      [{ romanji: 'pu', katakana: 'プ' }],
      [{ romanji: 'pe', katakana: 'ペ' }],
      [{ romanji: 'po', katakana: 'ポ' }],
    ],
    isPicked: false,
  },
];

export default katakana;
