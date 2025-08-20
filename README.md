# UNIVERSAL TRANSCRIBER

A simple universal transcriber for languages with unicode characters.

## INSTALLATION

```bash
npm i universal-transcriber
```

## USAGE

```js
let text1 = 'Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...';

let rule1 = ':,V:B, r: rr,ci:zi,co:ko, y : i ,qu:k';
let rule2 = 'φБVφBБ rφ rrБciφziБcoφkoБ y φ i Бquφk';

let transcriber = require('universal-transcriber');

let textPhoneme1 = transcriber.Transcribe(text1,rule1);
let textPhoneme2 = transcriber.Transcribe(text1,rule2);

console.log(textPhoneme1[0]);
console.log(textPhoneme2[0]);

// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
```

## TEST

```bash
npm test
```

## DEMO

[HOME](https://armotus.github.io/universal-transcriber)

## LICENSE

[MIT](https://opensource.org/license/mit)