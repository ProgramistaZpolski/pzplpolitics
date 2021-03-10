<!DOCTYPE html>
<html lang="pl" dir="ltr" data-sieciuchy="./sieciuchy.txt">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Kasztan Politics</title>
	<link rel="preconnect" href="https://js.sentry-cdn.com/">
	<link rel="dns-prefetch" href="https://js.sentry-cdn.com/">
	<meta name="description" content="Kasztan Politics, najnowszy test polityczny">
	<meta property="og:image" content="https://cdn.jsdelivr.net/gh/programistazpolski/experiments@master/tile.png">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Kasztan Politics">
	<meta name="twitter:card" content="summary">
	<meta name="twitter:creator" content="@ProgramistaZpolski">
	<meta name="twitter:site" content="@Kasztanspace">
	<meta name="twitter:title" content="Kasztan Politics">
	<meta name="twitter:description" content="Kasztan Politics, najnowszy test polityczny">
	<meta name="twitter:image" content="https://cdn.jsdelivr.net/gh/programistazpolski/experiments@master/tile.png">
	<meta name="theme-color" content="#fafafa">
	<meta name="author" content="Piotr Badełek">
	<link rel="apple-touch-icon" href="./favicon.png">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="mobile-web-app-capable" content="yes">
	<link rel="icon" type="image/x-icon" href="./favicon.ico">
	<link rel="icon" type="image/png" href="./favicon.png">
	<meta name="msapplication-config" content="browserconfig.xml">
	<meta name="application-name" content="Kasztan Politics">
	<meta name="msapplication-tooltip" content="Kasztan Politics, najnowszy test polityczny">
	<link rel="manifest" href="site.webmanifest">
	<link rel="stylesheet" href="style.css">
</head>

<body class="container">
	<!--[if IE]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
	<![endif]-->
	<header>
		<h1 class="d2 anim-hover-grow">pzpl Politics</h1>
	</header>
	<main>
		<div class="alert alert-error text-dark">
			<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="#55131a"
				class="float-start" viewBox="0 0 16 16">
				<path
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
			</svg>
			<span class="h5">RADYKAŁ ALERT</span><br><span>Uwaga! Potrzebujesz psychologa. Masz takie poglądy
				polityczne że nie zmieściły się na skali.<br> Twoje wyniki zostały znormalizowane.</span>
		</div>
		<div id="questions">
			<h2>{{ Pytanie }}</h2>
			<button class="btn btn-success btn-lg" onclick="nextQuestion(1);">Zgadzam
				się</button>
			<button class="btn btn-secondary btn-lg" onclick="nextQuestion(0.5);">Nie mam
				opinii</button>
			<button class="btn btn-error btn-lg" onclick="nextQuestion(0);">Nie zgadzam
				się</button>
		</div>
		<canvas width="743" height="791">
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a
					href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.
			</p>
		</canvas>
		<button class="btn btn-error" data-show="finish" onclick="rerender();">Kropki nie ma, zrenderuj jeszcze
			raz</button>
		<p id="shareURL">Udostępnij wynik - <span>{{ shareURL }}</span> <button class="btn btn-normal" onclick="copyLink();">Kopiuj</button></p>
	</main>
	<img src="./dot.png" alt="kropka" decoding="async" style="opacity: 0;" aria-hidden="true"><br><br>
	<footer>
		<button class="btn btn-info" onclick="toggleDarkMode();">Ciemny motyw aby oczy nie umierały</button><br><br>
		Uwaga, test powstał w celach humorystycznych i nie ma na celu nikogo obrazić.<br><br>
		By <a href="https://programistazpolski.ct8.pl/pl/?projekt=kasztanPolitics" target="_blank"
			rel="noopener noreferrer" title="Zatrudnij mnie za darmo pls">pzpl</a> <?= $year ?> , made originally for Kasztan Space - Innovation that excites
	</footer>
	<script src="./js/plugins.js" defer></script>
	<script src="./js/script.js" defer></script>
	<script src='https://js.sentry-cdn.com/dbc6ff808762477f924289c757e08dff.min.js' crossorigin="anonymous"
		defer></script>
</body>

</html>
