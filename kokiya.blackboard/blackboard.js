function postComment() {

//	alert(currentComment);
	createXMLHttpRequest();
        var url="result.php?timeStamp="+new Date().getTime();
        var queryString = createQueryString();
	xmlHttp.open("POST",url,true);
	xmlHttp.onreadystatechange = letsgo;
        xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlHttp.send(queryString);
}

function createQueryString(){
  	var currentComment= document.getElementById("comment").value;
        var queryString = "comment="+currentComment;
        return queryString;
}
var blackboard=document.getElementByID("blackboard");

function letsgo() {
	if (xmlHttp.readyState==4)
		{
 			document.getElementById("blackboard").innerHTML=xmlHttp.responseText; 
		}
}