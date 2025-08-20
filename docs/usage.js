'use strict';

// node usage.js

let text1 = 'Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...';

let rule1 = ':,V:B, r: rr,ci:zi,co:ko, y : i ,qu:k';
let rule2 = '>|V>B| r> rr|ci>zi|co>ko| y > i |qu>k';
let rule3 = 'φБVφBБ rφ rrБciφziБcoφkoБ y φ i Бquφk';
let rule4 = 'çÿVçBÿ rç rrÿciçziÿcoçkoÿ y ç i ÿquçk';
let rule5 = '}έV}Bέ r} rrέci}ziέco}koέ y } i έqu}k';
let rule6 = 'ş/VşB/ rş rr/cişzi/coşko/ y ş i /quşk';

let transcriber = require('../js/universal-transcriber.js');

let textPhoneme1 = transcriber.Transcribe(text1,rule1);
let textPhoneme2 = transcriber.Transcribe(text1,rule2);
let textPhoneme3 = transcriber.Transcribe(text1,rule3);
let textPhoneme4 = transcriber.Transcribe(text1,rule4);
let textPhoneme5 = transcriber.Transcribe(text1,rule5);
let textPhoneme6 = transcriber.Transcribe(text1,rule6);

console.log(textPhoneme1[0]);
console.log(textPhoneme2[0]);
console.log(textPhoneme3[0]);
console.log(textPhoneme4[0]);
console.log(textPhoneme5[0]);
console.log(textPhoneme6[0]);

// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
// Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...
