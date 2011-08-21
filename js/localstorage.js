/*init progress*/

function initLocalProgress() {
    if (!localStorage.getItem('progress')) {
        localStorage.setItem('progress', '0');
    }
}

initLocalProgress();

/*setup progress*/

function setProgress(chapter) {
    localStorage.setItem('progress', chapter);
}

function getProgress() {
    var progressvalue = localStorage.getItem('progress');
    if (progressvalue) {
        return parseInt(progressvalue,10);
    } else {
        return 0;
    }
}

/*init article
 *使用 prototype原型继承，实时刷新article值
 */

function Localarticle(index, title, content) {
    this.index = index;
    this.title = title;
    this.content = content;
}

Localarticle.prototype = new Article();
Localarticle.prototype.refresh = function() {
    this.index = localStorage.getItem('progress');
    this.title = localStorage.getItem(localStorage.getItem('progress'));
    this.content = localStorage.getItem(localStorage.getItem(localStorage.getItem('progress')));
};
var thisarticle = new Localarticle(localStorage.getItem('progress'), localStorage.getItem(localStorage.getItem('progress')), localStorage.getItem(localStorage.getItem(localStorage.getItem('progress'))));

/*setup quick view section*/

function setupQuickView() {
    var articlecontent = "<h1>" + thisarticle.index + ".&nbsp" + thisarticle.title + "</h1>" + thisarticle.content;
    var articleElement = document.getElementsByTagName('article')[0];
    articleElement.innerHTML = articlecontent;
}

setupQuickView();

/*setup progressbar use localStorage
 如果浏览器支持html5进度条，则在we section添加进度条，并且设置进度条value
 */

function initProgressBar() {
    var para = document.createElement('p');
    $(para).insertAfter($('#we>aside>h3'));
    var readingprogress = document.createElement('progress');
    $(readingprogress).appendTo($('#we aside p'));
    readingprogress.max = 59;
    readingprogress.value = parseInt(getProgress(),10) + 1;
}

function setProgressBarValue(value) {
    document.getElementsByTagName('progress')[0].value = value;
}

if (Boolean(document.createElement('progress').value)) {
    initProgressBar();
} else {
/*
     * fallback solutions here.
     * use progresspolyfill
     */
    yepnope({
        load: ['css/progresspolyfill.css', 'js/mylibs/progresspolyfill.min.js'],
        complete: function() {
            initProgressBar();
        }
    });
} /*两个按钮的代码：切换，改变progress*/

function toPrevious() {
    var chapter = getProgress();
    if (chapter !== 0) {
        setProgress((chapter - 1).toString());
        thisarticle.refresh();
        setupQuickView();
        setProgressBarValue(chapter - 1);
        $('li').removeClass('liselected');
        $($('li')[getProgress()]).addClass('liselected');
    }
}

function toNext() {
    var chapter = getProgress();
    if (chapter != 59) {
        setProgress((chapter + 1).toString());
        thisarticle.refresh();
        setupQuickView();
        setProgressBarValue(chapter + 1);
        $('li').removeClass('liselected');
        $($('li')[getProgress()]).addClass('liselected');
    }
}

var btn = document.getElementsByTagName('button');
EventUtil.addHandler(btn[0], 'click', toPrevious);
EventUtil.addHandler(btn[1], 'click', toNext);

/*自动生成章节*/

function initNav() {
    var nav = document.createElement('nav');
    var ul = document.createElement('ul');
    var lis = [];
    for (var i = 0; i < 60; i++) {
        lis[i] = document.createElement('li');
        lis[i].innerHTML = i + '.' + localStorage.getItem(i);
        ul.appendChild(lis[i]);
    }
    nav.appendChild(ul);
    $('#we>aside')[0].appendChild(nav);
}

initNav();

/*为目录添加listener，使其可以跳转章节，并且按章节改变样式*/

function toChapter() {
    $('li').removeClass('liselected');
    var chapter = parseInt(this.innerText);
    setProgress(chapter.toString());
    thisarticle.refresh();
    setupQuickView();
    setProgressBarValue(chapter);
    $(this).addClass('liselected');
}


$().ready(function() {
    $('li').bind('click', toChapter);
    $($('li')[getProgress()]).addClass('liselected');
})