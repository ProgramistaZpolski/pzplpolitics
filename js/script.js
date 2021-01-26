"use strict";

const devMode = true;

const pytania = [
	{
		"name": "kukanq to kasztan",
		"libleft": 0,
		"libright": 0.2,
		"authright": 0.1,
		"authleft": 0.3,
		"center": 0.5
	},
	{
		"name": "pzpla należy wywieźć na syberię",
		"libleft": 0,
		"libright": 0.1,
		"authright": 0.4,
		"authleft": 0.3,
		"center": 0.1
	},
	{
		"name": "Telefony to zło",
		"libleft": 0,
		"libright": 0.1,
		"authright": 0.4,
		"authleft": 0.3,
		"center": 0.1
	},
	{
		"name": "Spotify, YouTube Music, iTunes i inne platformy do odtwarzania muzyki to zło",
		"libleft": 0.1,
		"libright": 0,
		"authright": 0.4,
		"authleft": 0.5,
		"center": 0
	},
	{
		"name": "DaVinci to kasztan",
		"libleft": 0.4,
		"libright": 0,
		"authright": 0,
		"authleft": 0.1,
		"center": 0
	},
	{
		"name": "pzpl to kasztan",
		"libleft": 0.4,
		"libright": 0,
		"authright": 0.1,
		"authleft": 0,
		"center": 0
	},
	{
		"name": "Producenci komputerów, laptopów itp. powinni mieć prawo bloatować systemy",
		"libleft": 0.1,
		"libright": 0.5,
		"authright": 0.4,
		"authleft": 0,
		"center": 0.2
	},
	{
		"name": "Można kupować dyski 5tb do prac domowych",
		"libleft": 0.2,
		"libright": 0.8,
		"authright": 0.5,
		"authleft": 0.1,
		"center": 0.3
	},
	{
		"name": "Śluby dla homoseksualnych kasztanów powinny być dostępne",
		"libleft": 0.9,
		"libright": 0.7,
		"authright": 0,
		"authleft": 0.3,
		"center": 0.5
	},
	{
		"name": "kukanq powinien dostać bana na infinity developers",
		"libleft": 0.1,
		"libright": 0.2,
		"authright": 0.6,
		"authleft": 0.4,
		"center": 0.1
	},
	{
		"name": "liskqu powinien mieć prawo do wkurzania swoich sąsiadów?",
		"libleft": 0.3,
		"libright": 0.7,
		"authright": 0.4,
		"authleft": 0.1,
		"center": 0
		// https://youtu.be/Xi-S7ou6W6Y
		// btw czemu w kod patrzysz
	},
	{
		"name": "EnderK ma prawo streamować ze sklepu",
		"libleft": 0.5,
		"libright": 0.4,
		"authright": 0.4,
		"authleft": 0.2,
		"center": 0
	},
	{
		"name": "Czy kasztanos to najlepszy system?",
		"libleft": 0.1,
		"libright": 0,
		"authright": 0,
		"authleft": 0,
		"center": 0
	},
	{
		"name": "Albicla to dobro",
		"libleft": 0,
		"libright": 0.1,
		"authright": 0.2,
		"authleft": 0,
		"center": 0.5
	},
	{
		"name": "Sieciuchy są dobre, a sieciaki złe",
		"libleft": 0.1,
		"libright": 0,
		"authright": 0.1,
		"authleft": 0.2,
		"center": 0
	},
	{
		"name": "Sieciaki powinny mieszkać pod wodą w australii",
		"libleft": 0,
		"libright": 0.7,
		"authright": 0.4,
		"authleft": 0.1,
		"center": 0.2
	}
];

let state = {
	"question": 0,
	"libleft": 0,
	"libright": 0,
	"authleft": 0,
	"authright": 0,
	"center": 0
};

function start() {
	h("#questions h2").text(pytania[state.question].name);
};

function nextQuestion(obj) {
	if (obj === 1) {
		// użytkownik zgadza się
		state.libleft += pytania[state.question].libleft;
		state.libright += pytania[state.question].libright;
		state.authleft += pytania[state.question].authleft;
		state.authright += pytania[state.question].authright;
		state.center += pytania[state.question].center;
	} else if (obj === 0) {
		// użytkownik nie zgadza się
		state.libleft -= pytania[state.question].libleft;
		state.libright -= pytania[state.question].libright;
		state.authleft -= pytania[state.question].authleft;
		state.authright -= pytania[state.question].authright;
		state.center -= pytania[state.question].center;
	};
	state.question++;
	if (pytania[state.question]) {
		// gra dalej
		h("#questions h2").text(pytania[state.question].name);
	} else {
		// koniec gry
		h("#questions h2").text(`Wynik: ${Math.round(state.libleft)} Libleft, ${Math.round(state.libright)} libright
		${Math.round(state.authleft)} authleft, ${Math.round(state.authright)} authright ${Math.round(state.center)} Center`);
		h(".btn-secondary").css("display", "none");
		h(".btn-error").css("display", "none");
		h(".btn-success").css("display", "none");
		h("canvas").css("display", "block");
		let wynik1 = (Math.round(state.libleft) + Math.round(state.libright)) - (Math.round(state.authright) + Math.round(state.authleft));
		let wynik2 = (Math.round(state.authright) + Math.round(state.libright)) - (Math.round(state.libleft) + Math.round(state.libright));
		wynik1 -= Math.round(state.center / 4);
		wynik2 -= Math.round(state.center / 4);
		Sentry.captureMessage(`Wynik 1: ${283 + (wynik2 * 100)}  Wynik 2: ${303 + (wynik1 * 100)}`);
		render(283 + (wynik2 * 100), 303 + (wynik1 * 100));
	};
};

function render(val1, val2) {
	let canv = h("canvas").getEl();
	let ctx = canv.getContext("2d");
	let img1 = new Image();

	img1.onload = function () {
		ctx.drawImage(img1, 25, 25);
		setTimeout(() => {
			ctx.drawImage(h("img").getEl(), val1, val2);
		}, 250);
	};

	img1.src = "./compass.svg";
};

if (devMode) {
	window.onload = start;
};
