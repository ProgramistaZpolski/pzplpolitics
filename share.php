<!DOCTYPE html>
<html lang="en" dir="ltr">

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
		<h1 class="d2 anim-hover-grow">Kasztan Politics <span class="badge badge-normal">Feature Test 1</span></h1>
	</header>
	<main>
		<h2>
		<?php

		$questions = [
			"pzpla należy wywieźć na syberię",
			"Telefony to zło",
			"Spotify, YouTube Music, iTunes i inne platformy do odtwarzania muzyki to zło",
			"DaVinci to kasztan",
			"pzpl to kasztan",
			"Producenci komputerów, laptopów itp. powinni mieć prawo bloatować systemy",
			"Można kupować dyski 5tb do prac domowych",
			"Śluby dla homoseksualnych kasztanów powinny być dostępne",
			"EnderK ma prawo streamować ze sklepu",
			"Czy kasztanos to najlepszy system?",
			"Albicla to dobro",
			"Sieciuchy są dobre, a sieciaki złe",
			"Sieciaki powinny mieszkać pod wodą w australii",
			"h to najlepsza litera",
			"Za zabijanie chickenów powinno się karać",
			"Powinno się zabronić pisania \"wirusów\" w batchu"
		];

		$odpowiedzi = str_split($_GET["a"]);

		foreach ($odpowiedzi as $key => $value) {
			if ($value == "1") {
				echo "<br>" . $questions[$key] . " - Zgadzam się.";
			} else if ($value == "0") {
				echo "<br>" . $questions[$key] . " - Nie zgadzam się.";
			} else {
				echo "<br>" . $questions[$key] . " - Nie mam opinii.";
			}
		}

		?>
		</h2>
	</main>
	<footer>
		<button class="btn btn-info" onclick="toggleDarkMode();">Ciemny motyw aby oczy nie umierały</button><br>
		By <a href="https://programistazpolski.ct8.pl/pl/?projekt=kasztanPolitics" target="_blank"
			rel="noopener noreferrer" title="Zatrudnij mnie za darmo pls">pzpl</a>, made for Kasztan Space - Innovation that excites
	</footer>
	<script src="./js/plugins.js" defer></script>
	<script src='https://js.sentry-cdn.com/dbc6ff808762477f924289c757e08dff.min.js' crossorigin="anonymous"
		defer></script>
</body>

</html>