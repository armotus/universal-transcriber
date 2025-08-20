"use strict";

// npm test

let expect = require("chai").expect;
let transcriber = require("../js/universal-transcriber.js");

describe("#universal-transcriber", function() {

	it("Text 1 : Rule 1", function() {
	let result = transcriber.Transcribe("Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...",":,V:B, r: rr,ci:zi,co:ko, y : i ,qu:k");
	expect(result[0]).to.equal("Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...");
	});
	it("Text 1 : Rule 2", function() {
	let result = transcriber.Transcribe("Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...",">|V>B| r> rr|ci>zi|co>ko| y > i |qu>k");
	expect(result[0]).to.equal("Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...");
	});
	it("Text 1 : Rule 3", function() {
	let result = transcriber.Transcribe("Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...","φБVφBБ rφ rrБciφziБcoφkoБ y φ i Бquφk");
	expect(result[0]).to.equal("Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...");
	});
	it("Text 1 : Rule 4", function() {
	let result = transcriber.Transcribe("Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...","çÿVçBÿ rç rrÿciçziÿcoçkoÿ y ç i ÿquçk");
	expect(result[0]).to.equal("Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...");
	});
	it("Text 1 : Rule 5", function() {
	let result = transcriber.Transcribe("Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...","}έV}Bέ r} rrέci}ziέco}koέ y } i έqu}k");
	expect(result[0]).to.equal("Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...");
	});
	it("Text 1 : Rule 6", function() {
	let result = transcriber.Transcribe("Este relato es una fábula que ilustra una competencia entre el Viento del Norte y el Sol ...","ş/VşB/ rş rr/cişzi/coşko/ y ş i /quşk");
	expect(result[0]).to.equal("Este rrelato es una fábula ke ilustra una kompetenzia entre el Biento del Norte i el Sol ...");
	});

});
