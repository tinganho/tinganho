
var pagesData = 
	[
		{
			images: ['chromeBig2.png', 'clockies3.jpg', 'clockies1.jpg', 'clockies5.jpg'], title: 'Clockies', 
			info: 'Clockies is social appointment booking website. Service providers in local businesses ' +
			'almost always market them selves through the word-of-mouth from their customers. Clockies strengthens ' +
			'this word-of-mouth spread by giving the end-customers beautiful designed business cards, so they can share good service '+
			'providers among their friends in social media.'+
			'<br><br>'+
			'Clockies is very intuitive and simple and got fancy animations to make it more fun browsing the website. Clockies is equipped with a SOLR search engine, so searching for any kind of businesses gets relevant. '+
			'We also enabled calendar sync via CALDAV, so employees can keep track of new bookings on the go with their phones. ',
			link: 'http://www.clockies.com'
		},
		{
			images: ['velinho2.jpg', 'velinho3.jpg', 'velinho1.jpg'], title: 'Velinho', 
			info: 'Pin your favorite videos with Velinho. It\'s a simple and beautiful website for browsing YouTube videos. Velinho is not yet finished. But feel free to test it out. Some buttons and functionality won\'t work yet.',
			link: 'http://www.velinho.com'
		},
		{
			images: ['swipe-to-flip2.jpg'], title: 'Swipe-to-flip', 
			info: 'I strongly believe that the future of the web will enable more inputs between a human and a computer.'+
			' Nowadays, you can click, scroll and type in a keyboard to interact with the web. But where is the multi-touch features that everybody knows and loves?'+
			' I created this example to show case how you can swipe to flip a page.',
			link: ' http://www.clockies.com/dev/portfolio/labs/flips/'
		},
		{
			images: ['jeasycreate.jpg'], title: 'JeasyCreate', 
			info: 'There is a lot of DOM creation code in Clockies. We needed to develop Clockies faster, so we come up with a solution called JeasyCreate. JeasyCreate is a Javascript DOM creation framework. Writing DOM creation code can be time consuming, '+
			'espacially in highly interactive websites. With JeasyCreate it get much faster. Instead '+
			'of writing four lines of code for creating an element with a class name and append to the DOM tree, '+
			'you just need to write one line of code. Unlike JQuery, you don\'t need to type a lot of special characters .',
			link: 'https://github.com/tinganho/JeasyCreate'
		},
		
		{
			images: ['me-smiling.jpg'], title: 'Contact Me', 
			info: "I\'m available for jobs right now. I want jobs where I can put my heart on it. If you got any interesting contact me at <a class='email' href='mailto:tingan@clockies.com'>tingan@clockies.com</a>"
		}
    ];
function TinganHo(){
	this.currentPage = 0;
	this.lastFlip;//left or right last flip(in the direction it flips)
}
TinganHo.prototype.enableOpenWorkBook = function(){
	
	var OBJ = this;
	
	OBJ.openBook_ = function(){
		
		OBJ.openBook();
	}
	$('.workRibbon').click(OBJ.openBook_);
}
TinganHo.prototype.openBook = function(){
	
	var OBJ = this;
	
	$('.workRibbon').unbind();
	var incomingRightHalf = divAppend('.bookHalf.right', '.bookWrapper');
	$(incomingRightHalf).css('position', 'relative');
	var wrapper = divAppend('.bookHalfWrapper', incomingRightHalf);
	var page = OBJ.createPage(pagesData[0]);
	$(wrapper).append(page);
	$(page).css('margin-left', -400);
	var incomingLeftHalf = divAppend('.bookHalf.left', incomingRightHalf);
	var wrapper = divAppend('.bookHalfWrapper', incomingLeftHalf);
	window.setTimeout(function(){
		var page = OBJ.createPage(pagesData[0]);
		$(wrapper).append(page);
	}, 300);
	$(incomingLeftHalf).css('-webkit-transform', 'rotateY(180deg)').css('margin-left', -400);
	$(incomingLeftHalf).append($('.initialBookHalf'));
	$('.initialBookHalf').css('-webkit-transform', 'rotateY(180deg)').css('margin-left', -400).css('border', 'none').css('box-shadow', 'none').css('position', 'absolute')
	.css('top', 0).css('left', 0);

	window.setTimeout(function(){
		$('.bookWrapper').css('margin-left', 450);
		$(incomingLeftHalf).css('-webkit-transform', 'rotateY(0deg)');
	}, 0);
	
	window.setTimeout(function(){
		$(document.body).append($('.initialBookHalf'));
		$('.initialBookHalf').css('display', 'none');
	}, 300);
	
	OBJ.lastFlip = 'left';
	OBJ.currentPage = 0;
}
TinganHo.prototype.createPage = function(pageData){
	
	var OBJ = this;
	
	var openBook = document.createElement('div');
	openBook.className = 'openBook';
	
	var controllers = divAppend('.controllers', openBook);
	var backBtnLeft = imgAppend('.backBtnLeft', controllers);
	backBtnLeft.src = 'https://s3.amazonaws.com/clockies/portfolio/tinganho/backBtnLeft.png';
	var back = function(){
		OBJ.currentPage--;
		if(OBJ.currentPage > -1){
			OBJ.showPage(OBJ.currentPage, 'right');
		}else{
			OBJ.showInitialPage();
		}
	}
	$(backBtnLeft).click(back);
	var forward = function(){
		OBJ.currentPage++;
		if(OBJ.currentPage >=  pagesData.length){
			OBJ.showInitialPage();
			OBJ.currentPage = 0;
		}else{
			OBJ.showPage(OBJ.currentPage, 'left');
		}
	}
	var backBtnRight = imgAppend('.backBtnRight', controllers);
	backBtnRight.src = 'https://s3.amazonaws.com/clockies/portfolio/tinganho/backBtnRight.png';
	$(backBtnRight).click(forward);
	var imagesContainer = divAppend('.imagesContainer', openBook);
	var images = pageData.images;
	for(var i in images){
		var img = imgAppend('', imagesContainer);
		img.src = 'https://s3.amazonaws.com/clockies/portfolio/tinganho/screenShots/'+images[i];
	}
	
	var pageInfoContainer = divAppend('.pageInfoContainer', openBook);
	
	var title = h1Append('.pageTitle', pageInfoContainer);
	title.innerHTML = pageData.title;
	
	var info = pAppend('.pageInfo', pageInfoContainer);
	info.innerHTML = pageData.info;
	
	if(pageData.link != undefined){
		var link = aAppend('.link', pageInfoContainer);
		link.innerHTML = pageData.link;
		link.href = pageData.link;
		link.target = '_blank';
	}
	
	
	
	return openBook;
	
	
}
TinganHo.prototype.loadImages = function(){
	
	var OBJ = this;
	
	for(var i in pagesData){
		for(var y in pagesData[i].images){
			var img = imgAppend('', document.body);
			img.src = 'https://s3.amazonaws.com/clockies/portfolio/tinganho/screenShots/'+pagesData[i].images[y];
			$(img).css('display', 'none');
		}
		
	}
	
	var img = imgAppend('', document.body);
	img.src = 'https://s3.amazonaws.com/clockies/portfolio/tinganho/backBtnLeft.png';
	$(img).css('display', 'none');
	
	var img = imgAppend('', document.body);
	img.src = 'https://s3.amazonaws.com/clockies/portfolio/tinganho/backBtnRight.png';
	$(img).css('display', 'none');
}
TinganHo.prototype.showInitialPage = function(){
	
	var OBJ = this;
	
	if(OBJ.lastFlip == 'right'){
		var oldBookHalfLeft = $('.bookHalf.left:first');
		$(oldBookHalfLeft).css('position', 'absolute')
		var oldBookHalfRight = $(oldBookHalfLeft).find('.bookHalf');
		$('.bookWrapper').append(oldBookHalfRight);
		$(oldBookHalfRight).css('right', 0).css('margin-left', -400).css('-webkit-transform', 'rotateY(0deg)').css('position', 'absolute');
		$(oldBookHalfRight).append(oldBookHalfLeft);
		
	}
	window.setTimeout(function(){
		$('.bookHalf.left').css('-webkit-transform', 'rotateY(180deg)');
		$('.bookWrapper').css('margin-left', 250);
	}, 0);
	
	window.setTimeout(function(){
		$('.bookHalf.left .bookHalfWrapper').remove();
		$('.bookHalf.left').append($('.initialBookHalf'));
		$('.initialBookHalf').css('display', 'block').css('position', 'absolute').css('top', 0).css('left', 0);
	}, 300);
	
	window.setTimeout(function(){
		
		$('.bookHalfWrapper').remove()
		$('.initialBookHalf').appendTo('.bookWrapper');
		$('.initialBookHalf').css('box-shadow', '0px 0px 10px rgba(0, 0, 0, 0.8)').css('border-radius', '').css('-webkit-transform', '').css('margin-left', '');
		$('.bookHalf.right').remove();
		$('.workRibbon').click(OBJ.openBook_);
	}, 600);
	
	
}
TinganHo.prototype.showPage = function(pageIndex, flip){
	
	var OBJ = this;
	
	if(flip == 'left'){
		var incomingRightHalf = divAppend('.bookHalf.right', '.bookWrapper');
		$(incomingRightHalf).css('position', 'relative').css('top', 0).css('right', 0).css('z-index', 100);
		var wrapper = divAppend('.bookHalfWrapper', incomingRightHalf);
		var page = OBJ.createPage(pagesData[pageIndex]);
		$(wrapper).append(page);
		$(page).css('margin-left', -400);
		var incomingLeftHalf = divAppend('.bookHalf.left', incomingRightHalf);
		var wrapper = divAppend('.bookHalfWrapper', incomingLeftHalf);
		window.setTimeout(function(){
			var page = OBJ.createPage(pagesData[pageIndex]);
			$(wrapper).append(page);
		}, 300);
		$(incomingLeftHalf).css('-webkit-transform', 'rotateY(180deg)').css('margin-left', -400);
		if(OBJ.lastFlip == 'left'){
			var oldBookHalfRight = $('.bookHalf.right:first');
			var oldBookHalfLeft = $(oldBookHalfRight).find('.bookHalf');
		}else{
			var oldBookHalfLeft = $('.bookHalf.left:first');
			var oldBookHalfRight = $(oldBookHalfLeft).find('.bookHalf');
		}	
		$(incomingLeftHalf).append(oldBookHalfRight);
		$(oldBookHalfRight).css('-webkit-transform', 'rotateY(180deg)').css('margin-left', 0).css('border', 'none').css('box-shadow', 'none').css('position', 'absolute')
		.css('top', 0).css('left', 0).css('margin-left', 400);
		$('.bookWrapper').append(oldBookHalfLeft);
		$(oldBookHalfLeft).css('position', 'absolute').css('top', 0).css('left', 0).css('margin-left', -400).css('-webkit-transform', 'rotateY(0deg)');
		
		window.setTimeout(function(){
			$(incomingLeftHalf).css('-webkit-transform', 'rotateY(0deg)');
		}, 0);
		
		window.setTimeout(function(){
			$(oldBookHalfRight).remove();
		}, 300);
		
		window.setTimeout(function(){
			$(oldBookHalfLeft).remove();
			$(incomingRightHalf).css('z-index', '');
		}, 600);
		
		OBJ.lastFlip = 'left';
	}else{
		var incomingLeftHalf = divAppend('.bookHalf.left', '.bookWrapper');
		$(incomingLeftHalf).css('position', 'relative').css('top', 0).css('left', -400).css('z-index', 100);
		var wrapper = divAppend('.bookHalfWrapper', incomingLeftHalf);
		var page = OBJ.createPage(pagesData[pageIndex]);
		$(wrapper).append(page);
		var incomingRightHalf = divAppend('.bookHalf.right', incomingLeftHalf);
		var wrapper = divAppend('.bookHalfWrapper', incomingRightHalf);
		window.setTimeout(function(){
			var page = OBJ.createPage(pagesData[pageIndex]);
			$(wrapper).append(page);
			$(page).css('margin-left', -400);
		}, 300);
		$(incomingRightHalf).css('-webkit-transform', 'rotateY(180deg)').css('position', 'absolute').css('left', 400).css('top', 0);
		if(OBJ.lastFlip == 'left'){
			var oldBookHalfRight = $('.bookHalf.right:first');
			var oldBookHalfLeft = $(oldBookHalfRight).find('.bookHalf');
		}else{
			var oldBookHalfLeft = $('.bookHalf.left:first');
			var oldBookHalfRight = $(oldBookHalfLeft).find('.bookHalf');
		}	
		$(incomingRightHalf).append(oldBookHalfLeft);
		$(oldBookHalfLeft).css('position', 'absolute').css('top', 0).css('left', 0).css('margin-left', -400).css('-webkit-transform', 'rotateY(180deg)');
		$('.bookWrapper').append(oldBookHalfRight);
		$(oldBookHalfRight).css('position', 'absolute').css('top', 0).css('right', 0).css('margin-left', -400);
		window.setTimeout(function(){
			$(incomingRightHalf).css('-webkit-transform', 'rotateY(360deg)');
		}, 0);
		
		window.setTimeout(function(){
			$(oldBookHalfLeft).remove();
		}, 300);
		window.setTimeout(function(){
			$(oldBookHalfRight).remove();
			$(incomingLeftHalf).css('z-index', '');
		}, 600);
		
		OBJ.lastFlip = 'right';
	}
	
}
var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
		},
		searchString: function (data) {
			for (var i=0;i<data.length;i++)	{
				var dataString = data[i].string;
				var dataProp = data[i].prop;
				this.versionSearchString = data[i].versionSearch || data[i].identity;
				if (dataString) {
					if (dataString.indexOf(data[i].subString) != -1)
						return data[i].identity;
				}
				else if (dataProp)
					return data[i].identity;
			}
		},
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index == -1) return;
			return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
		},
		dataBrowser: [
			{
				string: navigator.userAgent,
				subString: "Chrome",
				identity: "Chrome"
			},
			{ 	string: navigator.userAgent,
				subString: "OmniWeb",
				versionSearch: "OmniWeb/",
				identity: "OmniWeb"
			},
			{
				string: navigator.vendor,
				subString: "Apple",
				identity: "Safari",
				versionSearch: "Version"
			},
			{
				prop: window.opera,
				identity: "Opera"
			},
			{
				string: navigator.vendor,
				subString: "iCab",
				identity: "iCab"
			},
			{
				string: navigator.vendor,
				subString: "KDE",
				identity: "Konqueror"
			},
			{
				string: navigator.userAgent,
				subString: "Firefox",
				identity: "Firefox"
			},
			{
				string: navigator.vendor,
				subString: "Camino",
				identity: "Camino"
			},
			{		// for newer Netscapes (6+)
				string: navigator.userAgent,
				subString: "Netscape",
				identity: "Netscape"
			},
			{
				string: navigator.userAgent,
				subString: "MSIE",
				identity: "Explorer",
				versionSearch: "MSIE"
			},
			{
				string: navigator.userAgent,
				subString: "Gecko",
				identity: "Mozilla",
				versionSearch: "rv"
			},
			{ 		// for older Netscapes (4-)
				string: navigator.userAgent,
				subString: "Mozilla",
				identity: "Netscape",
				versionSearch: "Mozilla"
			}
		],
		dataOS : [
			{
				string: navigator.platform,
				subString: "Win",
				identity: "Windows"
			},
			{
				string: navigator.platform,
				subString: "Mac",
				identity: "Mac"
			},
			{
				   string: navigator.userAgent,
				   subString: "iPhone",
				   identity: "iPhone/iPod"
		    },
			{
				string: navigator.platform,
				subString: "Linux",
				identity: "Linux"
			}
		]

};