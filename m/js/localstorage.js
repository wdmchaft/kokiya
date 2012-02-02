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
    if (Boolean(parseInt(progressvalue))) {
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
    var articleElement = document.getElementById('tycontent');
    articleElement.innerHTML = articlecontent;
}

setupQuickView();

function toPrevious() {
    var chapter = getProgress();
    if (chapter !== 0) {
        setProgress((chapter - 1).toString());
        thisarticle.refresh();
        setupQuickView();
		toTop();
    }
}

function toNext() {
    var chapter = getProgress();
    if (chapter != 59) {
        setProgress((chapter + 1).toString());
        thisarticle.refresh();
        setupQuickView();
		toTop();
    }
}

var btn = document.getElementsByTagName('button');
EventUtil.addHandler(btn[0], 'click', toPrevious);
EventUtil.addHandler(btn[1], 'click', toNext);