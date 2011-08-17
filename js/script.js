﻿/* Author: spencer
	to-do:研究modernizr.load 封装代码；改进initRecent，封装进一个对象？
*/

function storaged(){
	return Modernizr.localstorage&&Boolean((localStorage.getItem('直升班——结构'))&&Boolean(localStorage.getItem('1'))&&Boolean(localStorage.getItem('印象——过渡')));
}
function Article(index,title,content){
	this.index=index;this.title=title;this.content=content;
}
Article.prototype={
	constructor:Article
};

$(document).ready(function() {
	$('aside>img').click(function(){
		$('#wedding').hide('fast',function(){
				$('#we>p').hide('fast',function(){
					$('#we>section').show('slow');
					$('#we>aside>nav').fadeIn();
				});
			});
		});
	});
/*
https://github.com/Modernizr/Modernizr/issues/308
Modernizr mini version ie7/8 bug
take care about that
使用标准版Modernizr&yepnope ,fixed
如果modernizr修复了这个bug，用回min版
*/	
yepnope([{
	test:storaged(),
	yep:{'local':'js/localstorage.js'},
	nope:{'we':'js/we.js'},
	callback:{
		'we':function (url, result, key){
			if(Modernizr.localstorage){
			yepnope('js/localstorage.js');
			} else {
			yepnope('js/nolocalstorage.js');
			}
		}
	}
},{
	test:Modernizr.fontface,
	yep:'css/font/fontface.css'
}]);