/*init article
 *使用 prototype原型继承，实时刷新article值
 */
function Localarticle(index, title, content) {
	this.index = index;
	this.title = title;
	this.content = content;
}

Localarticle.prototype = new Article();
Localarticle.prototype.refresh = function(i) {
	this.index = i;
	this.title = alldata[i].chapter;
	this.content = alldata[i].content;
}
var thisarticle = new Localarticle(0, alldata[0].chapter, alldata[0].content);

/*setup quick view section*/
function setupQuickView() {
	var articlecontent = "<h1>" + thisarticle.index + ".&nbsp" + thisarticle.title + "</h1>"+ thisarticle.content;
	var articleElement = document.getElementsByTagName('article')[0];
	articleElement.innerHTML = articlecontent;
}

setupQuickView();

function initProgressBar() {
	var para = document.createElement('p');
	$(para).insertAfter($('#we>aside>h3'));
	var readingprogress = document.createElement('progress');
	$(readingprogress).appendTo($('#we aside p'));
	readingprogress.max = 59;
	readingprogress.value = 0;
}

function setProgressBarValue(value) {
	document.getElementsByTagName('progress')[0].value = value;
}

if(Boolean(document.createElement('progress').value)) {
	initProgressBar();
} else {
	/*
	 * fallback solutions here.
	 * use progresspolyfill
	 */
	yepnope({
		load : ['css/progresspolyfill.css', 'js/mylibs/progresspolyfill.min.js'],
		complete : function() {initProgressBar();
		}
	})
}
/*两个按钮的代码：切换，改变progress*/
function toPrevious() {
	var chapter = thisarticle.index;
	if(chapter != 0) {
		thisarticle.refresh(chapter - 1);
		setupQuickView();
		setProgressBarValue(thisarticle.index);
		$('li').removeClass('liselected');
		$($('li')[thisarticle.index]).addClass('liselected');
	}
}

function toNext() {
	var chapter = thisarticle.index;
	if(chapter != 59) {
		thisarticle.refresh(chapter + 1);
		setupQuickView();
		setProgressBarValue(thisarticle.index);
		$('li').removeClass('liselected');
		$($('li')[thisarticle.index]).addClass('liselected');
	}
}

var btn = document.getElementsByTagName('button');
EventUtil.addHandler(btn[0], 'click', toPrevious);
EventUtil.addHandler(btn[1], 'click', toNext);

/*自动生成章节目录*/
function initNav() {
	var nav = document.createElement('nav');
	var ul = document.createElement('ul');
	var lis = [];
	for(var i = 0; i < 60; i++) {
		lis[i] = document.createElement('li');
		lis[i].innerHTML = i + '.' + alldata[i].chapter;
		ul.appendChild(lis[i]);
	}
	nav.appendChild(ul);
	$('#we>aside')[0].appendChild(nav);
}

initNav();

function toChapter() {
	$('li').removeClass('liselected');
	var chapter = parseInt(this.innerText);
	thisarticle.refresh(chapter);
	setupQuickView();
	setProgressBarValue(chapter);
	$(this).addClass('liselected');
}

$().ready(function() {
	$('li').bind('click', toChapter);
})