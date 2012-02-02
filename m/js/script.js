function storaged() {
	return Modernizr.localstorage && Boolean((localStorage.getItem('直升班——结构')) && Boolean(localStorage.getItem('1')) && Boolean(localStorage.getItem('印象——过渡')));
}

function Article(index, title, content) {
    this.index = index;
    this.title = title;
    this.content = content;
}

var EventUtil ={
	addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type,handler,false);
		} else if (element.attachEvent){
			element.attachEvent('on'+type,handler);
		} else {
			element['on'+type]=handler;
		}
	},
	removeHandler: function(element,type,handler){
		if (element.removeEventListener){
			element.removeEventListener(type,handler,false);
		} else if (element.detachEvent){
			element.detachEvent('on'+type,handler);
		} else {
			element['on'+type]=null;
		}
	}
};

yepnope([{
	test : storaged(),
	yep : {
		'local' : 'js/localstorage.js'
	},
	nope : {
		'we' : 'js/we.js'
	},
	callback : {
		'we' : function(url, result, key) {
			if(Modernizr.localstorage) {
				yepnope('js/localstorage.js');
			} else {
				yepnope('js/nolocalstorage.js');
			}
		}
	}
}]);


//mobile version
//scroll to top when press the Button
/*
* TODO:smooth scroll
*/
function toTop(){
	$.mobile.silentScroll(0);
}

$("nav>ul>li:first>a").bind('click',function(){
	$("#trintro").fadeOut(300,function(){
		$("#tyintro").show();
		$("#actionbtn>span>span").text("阅读最近章节");
		$("#actionbtn").attr('href','#threeyears');
	});
});
$("nav>ul>li:last>a").bind('click',function(){
	$("#tyintro").fadeOut(300,function(){
		$("#trintro").show();
		$("#actionbtn>span>span").text("go");
		$("#actionbtn").attr('href','http://kokiya.com/wedding');
	});
});