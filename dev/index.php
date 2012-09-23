<!DOCTYPE HTML>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Tingan Ho's portfolio</title>
<meta name="description" content="I'm a passionate designer, programmer & thinker">
<?php include 'includes/headers.php'; ?>

</head>

<body spellcheck="false">
<!--<div class='stars'></div>-->
<div class='canvasWrapper'>
<div class='canvas'>
	<div class='header'>
<!--		<img class='logo2' src='https://s3.amazonaws.com/clockies/portfolio/tinganho/logo.png'></img>-->
		<div class='subText'>My Awesome</div>
		<div class='logo'>Tingan Ho</div>
		<div class='subText2'>Portfolio</div>
	</div>
	<div class='bookWrapper'>
		<div class='initialBookHalf'>
			<img class='workRibbon' src='images/ribbonBlue.png'></img>
			<div class='profileMiniatureContainer'>
				<img src='images/me.png'></img>
			</div>
			<div class='posts'>
				<div class='post'>
					<h1>About me</h1>
					<p>My name is Tingan Ho and I'm the co-founder of Clockies. I'm a passionate designer, coder & thinker. I'm lucky to have
					the best of three worlds, being a good designer, programmer and having good ideas.
					<br>
					<br>
					I have always loved design, but it wasn't until I turned 22 years old that I started designing websites. Before that, I have 
					always loved painting, but one thing I was really good at was mathematics. I was a top student in Sweden's most
					recognized university, Royal Institue of Technology. I came in to a program where only 15 people could attend. And it was 
					the most attractive program in the university. I attended the program, which when you 
					finished could end up with having a nice job in the finance sector. After having top grades from the first and second year I dropped out. 
					I had barely started my third year. The reason I dropped out was because I worked with an idea with my brother.
					I followed my heart, even though I always since childhood been involved with stocks, my heart loved something even more, being an 
					entrepreneur. And the idea I had with my brother was Clockies.
					<br>
					<br>
					When I'm not designing. I love hanging out with friends over a Coffe. I'm also pretty athletic, I have always exercised something
					in my life. Right now I'm visiting the gym 3 days a week to keep myself healthy.
					<br>
					<br>
					Friends consider me as a nice and down-to-earth kind of guy. I'm almost always happy, even when I'm sad I'm happy. I'm only harsh 
					when I'm working, because if you are not harsh something is wrong. 
					<br>
					<br>
					I will always hunt for the next big thing, think about the unthinkable and realize ideas that hopefully will
					shape the world.
					<br>
					<br>
					Sincerely,
					<br>
					<br>
					Tingan Ho
					<br>
					<a class='email' href='mailto:tingan@clockies.com'>tingan@clockies.com</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
<script>
$(document).ready(function(){
	var tinganHoObj = new TinganHo();
	tinganHoObj.enableOpenWorkBook();
	tinganHoObj.loadImages();
	$('.typekit-badge').remove();
});
</script>
<script>
BrowserDetect.init();
if(BrowserDetect.browser != 'Safari' && BrowserDetect.browser != 'Chrome'){
	window.location.href = 'http://www.velinho.com/unsupported_web_browser.php';
}
</script>
</html>
