/* Author: spencer
 to-do:研究modernizr.load 封装代码；改进initRecent，封装进一个对象？
 */

function storaged() {
    return Modernizr.localstorage && Boolean((localStorage.getItem('直升班——结构')) && Boolean(localStorage.getItem('1')) && Boolean(localStorage.getItem('印象——过渡')));
}

function Article(index, title, content) {
    this.index = index;
    this.title = title;
    this.content = content;
}

Article.prototype = {
    constructor: Article
};

function backFromWe() {
    $('#we>section').hide('slow', function() {
        $('#we>aside>nav').fadeOut();
        $('#we>aside>p').fadeOut('normal', function() {
            $('#we>div').show('fast', function() {
                $('#wedding').show('fast');
                $('header span').text('.com');
                $('header h1').unbind('click');
                $('#we .vbar').show();
            });
        });
    });
}

function toWe() {
    $('aside>img').click(function() {
        $('#wedding').hide('fast', function() {
            $('#we>div').hide('fast', function() {
                $('header span').text('/threeyears');
                $('header h1').click(function() {
                    backFromWe();
                });
            });
            $('#we>section').show('slow');
            $('#we>aside>nav').fadeIn();
            $('#we>aside>p').fadeIn();
            $('#we .vbar').hide();
        });
    });
}


$(document).ready(function() {
    toWe();
});


/*
 https://github.com/Modernizr/Modernizr/issues/308
 Modernizr mini version ie7/8 bug
 take care about that
 使用标准版Modernizr&yepnope ,fixed
 如果modernizr修复了这个bug，用回min版
 */
yepnope([{
    test: storaged(),
    yep: {
        'local': 'js/localstorage.js'
    },
    nope: {
        'we': 'js/we.js'
    },
    callback: {
        'we': function(url, result, key) {
            if (Modernizr.localstorage) {
                yepnope('js/localstorage.js');
            } else {
                yepnope('js/nolocalstorage.js');
            }
        }
    }},
{
    test: Modernizr.fontface,
    yep: 'css/font/Disco_fontface.css'},
{
    test: 1,
    load: ['http://tjs.sjs.sinajs.cn/t3/platform/js/api/wb.js', 'http://tjs.sjs.sinajs.cn/t3/style/css/common/card.css'],
    complete: function() {
        WB.core.load(['connect', 'client', 'widget.base', 'widget.atWhere'], function() {
            var cfg = {
                key: '2285514699',
                xdpath: 'http://kokiya.com/xd.html'
            };
            WB.connect.init(cfg);
            WB.client.init(cfg);

            //user card widget
            WB.widget.atWhere.searchAndAt($('#we>aisde>h3')[0]);
        });
    }}]);