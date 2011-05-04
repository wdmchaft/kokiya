var currentComment= document.getElementByID("comment");
var Comment= currentComment.getAttribute("value");
alert Comment;

function postComment() {
	xmlHttp.onreadystatechange = letsgo;
	xmlHttp.open("post","result.php?comment="+Comment,true);
	xmlHttp.send(null);

}

var blackboard=document.getElementByID("blackboard");

function letsgo() {
	if (xmlHttp.readyState==4)
		{
		document.getElementByID("blackboard").innerHtml(xmlHttp.responseText);
		
		}
}