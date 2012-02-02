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
};
var thisarticle = new Localarticle(0, alldata[0].chapter, alldata[0].content);

/*setup quick view section*/

function setupQuickView() {
    var articlecontent = "<h1>" + thisarticle.index + ".&nbsp" + thisarticle.title + "</h1>" + thisarticle.content;
    var articleElement = document.getElementById('tycontent');
    articleElement.innerHTML = articlecontent;
}

setupQuickView();

function toPrevious() {
    var chapter = thisarticle.index;
    if (chapter !== 0) {
        thisarticle.refresh(chapter - 1);
        setupQuickView();
		toTop();
    }
}

function toNext() {
    var chapter = thisarticle.index;
    if (chapter !== 59) {
        thisarticle.refresh(chapter + 1);
        setupQuickView();
		toTop();
    }
}

var btn = document.getElementsByTagName('button');
EventUtil.addHandler(btn[0], 'click', toPrevious);
EventUtil.addHandler(btn[1], 'click', toNext);