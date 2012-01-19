/* Author:
	Spencer Zhang
	sepmein@gmail.com
	Copy right reserved
*/

// Add an Object method that doesn't  // affect for/in loops 
Object.defineProperty(
	Object.prototype,
	"extend",
	{
		enumerable: false,
		writable: true,
		configurable: true,
		value: function (from) {
			var names = Object.getOwnPropertyNames(from);
			names.forEach(function (n) {
				if (n in this) return;
				var d = Object.getOwnPropertyDescriptor(from, n);
				Object.defineProperty(this, n, d);
			});
		}
    }
);

/*core*/

var kokiya = Object.create(Object.prototype);

Object.defineProperties(kokiya, {

	"testResult" : {

		/*
			测试浏览器的兼容性。返回一个对象。包含一个
			目前只测试浏览器是否使用html5 localStorage储存过小毛的文。
			使用testResult动态加载js文件。
			将来扩展。
		*/

		
		value : (function () {

			var result = {};
			/*&#x6D4B;&#x6D4B;&#x4EE5;&#x524D;&#x6709;&#x7C73;&#x6709;&#x4E0A;&#x8FC7;*/
			result.storaged = Modernizr.localstorage && Boolean((localStorage.getItem('&#x76F4;&#x5347;&#x73ED;&#x2014;&#x2014;&#x7ED3;&#x6784;')) && Boolean(localStorage.getItem('1')) && Boolean(localStorage.getItem('&#x5370;&#x8C61;&#x2014;&#x2014;&#x8FC7;&#x6E21;')));

			return result;

		})(),

		writable : true,
		configurable :  true,
		enumerable :  true

	},

	/*init kokiya*/

	"init" : {

		/*
			在loadModule函数作用完后，递归执行被加载入kokiya.module数组的模块。
			成功后在console记录一条消息。
			目前没有参数。
		*/
		
		value : function () {
			
			for (var i = this.module.length - 1; i >= 0; i--) {
				for (var prop in this.module[i]){
					this.module[i][prop]();
					/*for debug*/
					console.log("Module "+prop+" loaded");
				}
			};


		},
		writable : true,
		configurable :  true,
		enumerable :  true

	},

	"module" : {
		

		/*
			一个数组，由Spencer臆想出来的模块的组合
		*/

		value : [],
		writable : true,
		configurable : true,
		enumerable : true

	},

	"loadModule" : {
		
		/*
			加载模块，加载的参数称为“模块”。（模块是由spencer臆想出来的东西）
			“模块”可以是一个由对象构成的数组，也可以是一个对象。
			无论是数组还是对象，这个对象都由{”模块名“：”函数体“}构成。
			所加载的模块自动推送到kokiya.module数组。
		*/

		value : function (m) {
			
			if( Array.isArray(m) ) {
				for (var i = m.length - 1; i >= 0; i--) {
					this.module.push(m[i]);
				};
			} else {
				this.module.push(m);
			}

		},
		writable : true,
		configurable : true,
		enumerable : true

	}

});

kokiya.loadModule(

	[
		/*&#x4E3A;link&#x589E;&#x52A0;bootstrap popover&#x6548;&#x679C;*/
		{
			"popover" : function () {
				$('footer a').popover();
			}
		},
		{
			"wrapImage" : function () {  
  
				$("img").load(function() {  
			   		$(this).wrap(function(){  
			      		return '<span class="image-wrap ' + $(this).attr('class') + '" style="position:relative; display:block; background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />';  
			    	});  
			    $(this).css("opacity","0");  
			  });  
			  
			}
		},
		{
			"hideContent" : function () {

				$(".articleContent").hide();

			}	
		},
		{
			"sliderbox" : function () {
			
				var wrapbox = $('<div></div>').addClass('wrapbox');
				$('#main').after(wrapbox);
				$('<div></div>').addClass('sliderbox').appendTo(wrapbox);

				function createSubDiv (className){
					var div=$('<div></div>');
					div.addClass('subbox'+' '+className);
					div.html($("#"+className+">div.articleContent").html());
					div.appendTo($(".sliderbox"));	
				};
				createSubDiv("kolumn");
				createSubDiv("we");
				createSubDiv("wedding");



				//get content
				function showDetail() {
					
					var kolumnLeft = '0px',
						weLeft = '-960px',
						weddingLeft = '-1920px';

					if ( $('div.wrapbox').css('display') == 'none' ) {
						
						// display slider box,change location,change pointer
						$('div.sliderbox').css('left',setPosition(this));
						$('div.wrapbox').slideDown();

					} else if($(this).hasClass(checkPosition())) {
						/*slider已显示，并且是当前tab*/
						//close slider box
						//tweek more beautiful effects
						$('div.wrapbox').slideUp();

					} else /*slider已显示，并且不是当前tab*/ {
						
						//change to current location
						$('div.sliderbox').css('left',setPosition(this));
					}

					function checkPosition(){
						var position = $('div.sliderbox').css('left');

						switch (position) {
							case '0px' : return 'kolumn';
							case '-960px' : return 'we';
							case '-1920px' : return 'wedding';

						}
					
					
							
					}

					function setPosition(object){
						var currentObject = object;
						var who = $(currentObject);
						if (who.hasClass('kolumn')) {
							return '0px';
						} else if (who.hasClass('we')) {
							return '-960px';
						} else if (who.hasClass('wedding')) {
							return '-1920px';
						} else {
							console.log($(this));
						}
 
					}
				
				}

				$('#main>article').bind('click',showDetail);

			}
		}
	]

);

kokiya.init();