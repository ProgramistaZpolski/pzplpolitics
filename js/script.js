"use strict";


const pytania = [
	/*{
		"name": "kukanq to kasztan",
		"libleft": 0,
		"libright": 0.2,
		"authright": 0.1,
		"authleft": 0.3,
		"center": 0.5
	},*/
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
	/*{
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
	},*/
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
	},
	{
		"name": "h to najlepsza litera",
		"libleft": 0.5,
		"libright": 0.5,
		"authright": 0.3,
		"authleft": 0.2,
		"center": 1
	},
	{
		"name": "Za zabijanie chickenów powinno się karać",
		"libleft": 0.5,
		"libright": 0,
		"authright": 0.1,
		"authleft": 0.8,
		"center": 0
	},
	{
		"name": "Powinno się zabronić pisania \"wirusów\" w batchu",
		"libleft": 0.5,
		"libright": 0,
		"authright": 0.1,
		"authleft": 0.8,
		"center": 0.1
	},
	{
		"name": "Władza na serwerze EnderK House powinna być sprawowana przez The Vision, a EnderK powinien być tylko maskotką",
		"libleft": 0.2,
		"libright": 0.1,
		"authright": 0.8,
		"authleft": 1,
		"center": 0.5
	}
];

let state = {
	"question": 0,
	"libleft": 0,
	"libright": 0,
	"authleft": 0,
	"authright": 0,
	"center": 0,
	"anwsers": []
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
		state.anwsers.push(obj);
	} else if (obj === 0) {
		// użytkownik nie zgadza się
		state.libleft -= pytania[state.question].libleft;
		state.libright -= pytania[state.question].libright;
		state.authleft -= pytania[state.question].authleft;
		state.authright -= pytania[state.question].authright;
		state.center -= pytania[state.question].center;
		state.anwsers.push(obj);
	} else {
		state.anwsers.push("h");
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
		h("[data-show]").css("display", "block");
		h("#shareURL").css("display", "block");
		h("#shareURL span").text(`http://kasztan.space/kasztanpolitics/share.php?a=${state.anwsers.toString().replaceAll(",", "")}`);
		let wynik1 = (Math.round(state.libleft) + Math.round(state.libright)) - (Math.round(state.authright) + Math.round(state.authleft));
		let wynik2 = (Math.round(state.authright) + Math.round(state.libright)) - (Math.round(state.libleft) + Math.round(state.libright));
		wynik1 -= Math.round(state.center / 5);
		wynik2 -= Math.round(state.center / 5);
		if (258 + (wynik2 * 65) > 510 || 278 + (wynik1 * 65) > 510) {
			h(".alert").css("display", "block");
			render(510, 510);
		} else if (258 + (wynik2 * 65) < -510 || 278 + (wynik1 * 65) < -510) {
			h(".alert").css("display", "block");
			render(-510, -510);
		} else {
			render(258 + (wynik2 * 65), 278 + (wynik1 * 65));
		}
	};
};

function rerender() {
	let canv = h("canvas").getEl();
	let ctx = canv.getContext("2d");
	let wynik1 = (Math.round(state.libleft) + Math.round(state.libright)) - (Math.round(state.authright) + Math.round(state.authleft));
	let wynik2 = (Math.round(state.authright) + Math.round(state.libright)) - (Math.round(state.libleft) + Math.round(state.libright));
	wynik1 -= Math.round(state.center / 5);
	wynik2 -= Math.round(state.center / 5);
	let img2 = new Image();

	img2.onload = function () {
		ctx.drawImage(img2, 258 + (wynik2 * 65), 278 + (wynik1 * 65));
	};

	img2.src = "./dot.png";
};

function render(val1, val2) {
	let img1 = new Image();

	img1.onload = function () {
		let canv = h("canvas").getEl();
		let ctx = canv.getContext("2d");
		ctx.drawImage(img1, 0, 0);
		ctx.drawImage(h("img").getEl(), val1, val2);
	};

	img1.src = "./compass.svg";
};

window.onload = start;

h("h1").on("click", () => { window.location.reload(); });