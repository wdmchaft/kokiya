<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh_CN" lang="zh_CN">
<head>
<meta name="description" content="婚礼邀请函，包括交通及时间信息。细节确定后会发布详细信息，请关注。" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="Generator" content="iWeb 3.0.3">
<meta name="iWeb-Build" content="local-build-20110401">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
<meta name="viewport" content="width=700">
<title>Things You May Wanna Know</title>
<link rel="stylesheet" type="text/css" media="screen,print" href="invitation/invitation_files/invitation.css" />
<!--[if lt IE 8]><link rel='stylesheet' type='text/css' media='screen,print' href='invitation_files/invitationIE.css'/><![endif]-->
<!--[if gte IE 8]><link rel='stylesheet' type='text/css' media='screen,print' href='Media/IE8.css'/><![endif]-->
<script type="text/javascript" src="invitation/Scripts/iWebSite.js"></script>
<script type="text/javascript" src="invitation/Scripts/Widgets/SharedResources/WidgetCommon.js"></script>
<script type="text/javascript" src="invitation/Scripts/Widgets/Navbar/navbar.js"></script>
<script type="text/javascript" src="invitation/Scripts/Widgets/GoogleMap/GoogleMap.js"></script>
<script type="text/javascript" src="invitation/Scripts/iWebImage.js"></script>
<script type="text/javascript" src="invitation/invitation_files/invitation.js"></script>
<style type="text/css">
div#widget0 .navbar {
	font-family: Arial, sans-serif;
	font-size: 1em;
	color: #666;
	margin: 9px 0px 6px 0px;
	line-height: 30px;
}
div#widget0 .navbar-bg {
	text-align: center;
}
div#widget0 .navbar-bg ul {
	list-style: none;
	margin: 0px;
	padding: 0px;
}
div#widget0 li {
	list-style-type: none;
	display: inline;
	padding: 0px 10px 0px 10px;
}
div#widget0 li a {
	text-decoration: none;
	color: #666;
}
div#widget0 li a:visited {
	text-decoration: none;
	color: #666;
}
div#widget0 li a:hover {
	color: #463C3C;
	text-decoration: none;
}
div#widget0 li.current-page a {
	color: #463C3C;
	text-decoration: none;
	font-weight: bold;
}
</style>

</head>
<body style="background: rgb(255, 255, 255); margin: 0pt; " onload="onPageLoad();" onunload="onPageUnload();">
 <?php include_once("analyticstracking.php") ?>
<?php
$name=trim($_POST['name']);
?>
<div style="text-align: center; ">
  <div style="margin-bottom: 0px; margin-left: auto; margin-right: auto; margin-top: 0px; overflow: hidden; position: relative; word-wrap: break-word;  text-align: left; width: 700px; " id="body_content">
    <div style="background: transparent url(invitation_files/backgroundimage_1.jpg) no-repeat scroll center center; width: 700px; ">
      <div style="margin-left: 0px; position: relative; width: 700px; z-index: 0; " id="nav_layer">
        <div style="height: 0px; line-height: 0px; " class="bumper">&nbsp;</div>
        <div class="com-apple-iweb-widget-navbar flowDefining" id="widget0" style="margin-left: 35px; margin-top: 0px; opacity: 1.00; position: relative; width: 630px; z-index: 1; ">
          <div id="widget0-navbar" class="navbar">
            <div id="widget0-bg" class="navbar-bg">
              <ul id="widget0-navbar-list" class="navbar-list">
                <li class="noncurrent-page"><a href="./HOME.html">HOME </a></li>
                <li class="noncurrent-page"><a href="./huan_ying.html">欢迎 </a></li>
                <li class="noncurrent-page"><a href="./zhao_pian.html">照片 </a></li>
              </ul>
            </div>
          </div>
        </div>
        <script type="text/javascript"><!--//--><![CDATA[//><!--
new NavBar('widget0', 'invitation/Scripts/Widgets/Navbar', 'invitation/Scripts/Widgets/SharedResources', '.', {"path-to-root": "", "navbar-css": ".navbar {\n\tfont-family: Arial, sans-serif;\n\tfont-size: 1em;\n\tcolor: #666;\n\tmargin: 9px 0px 6px 0px;\n\tline-height: 30px;\n}\n\n.navbar-bg {\n\ttext-align: center;\n}\n\n.navbar-bg ul {\n\tlist-style: none;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\n\nli {\n\tlist-style-type: none;\n\tdisplay: inline;\n\tpadding: 0px 10px 0px 10px;\n}\n\n\nli a {\n\ttext-decoration: none;\n\tcolor: #666;\n}\n\nli a:visited {\n\ttext-decoration: none;\n\tcolor: #666;\n}\n\nli a:hover\r{\r\n \tcolor: #463C3C;\n\ttext-decoration: none;\r}\n\n\nli.current-page a\r{\r\t color: #463C3C;\n\ttext-decoration: none;\n\tfont-weight: bold;\r\r}\n", "current-page-GUID": "B34D2B11-3F30-4FE3-986F-76552D2BAA78", "isCollectionPage": "NO"});
//--><!]]></script>
        <div style="clear: both; height: 0px; line-height: 0px; " class="spacer">&nbsp;</div>
      </div>
      
      <?php
	  @ $connect =new mysqli("localhost","sepmein","crimson87","sepmein_kky");
	  $connect->query("SET NAMES utf8");
	  if (mysqli_connect_errno()) {
		  echo 'Could not connect: ' . mysqli_connect_error();
		  exit;
	  }
//	  $selected = mysqli_select_db($connect,"sepmein_kky");
//	  if (!$selected) {
//		  echo "Cannot select database.";
//		  exit;
//	  } 
	  
	  $log ="SELECT * FROM `invitation` where name=\"".$name."\"";
  
	  $result = $connect->query($log);
	  if (!$result) {
	  	echo "Cannot run query.";
		exit;
	  }
	  $num_results =$result->num_rows;
	  if  ($num_results == 0) {
		  echo $name;
		  echo "<h1>唉哟喂。。。</h1>";
		  echo "<p>You are not authorized to use this resource.</p>";
		  $connect->close();
		  exit;
	  } else {
	  ?>
      <div style="height: 73px; margin-left: 0px; position: relative; width: 700px; z-index: 10; " id="header_layer">
        <div style="height: 0px; line-height: 0px; " class="bumper">&nbsp;</div>
        <div style="height: 1px; width: 630px;  height: 1px; left: 35px; position: absolute; top: 3px; width: 630px; z-index: 1; " class="tinyText">
          <div style="position: relative; width: 630px; "> <img src="invitation_files/shapeimage_1.jpg" alt="" style="height: 1px; left: 0px; position: absolute; top: 0px; width: 630px; "> </div>
        </div>
        <div id="id1" style="height: 50px; left: 35px; position: absolute; top: 23px; width: 630px; z-index: 1; " class="style_SkipStroke shape-with-text">
          <div class="text-content style_External_630_50" style="padding: 0px; ">
            <div class="style">
              <p style="padding-bottom: 0pt; padding-top: 0pt; " class="Header">Things You May Wanna Know</p>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-left: 0px; position: relative; width: 700px; z-index: 5; " id="body_layer">
        <div style="height: 0px; line-height: 0px; " class="bumper">&nbsp;</div>
        <div>
          <?php
		echo "<h1>尊敬的&nbsp;".$name."&nbsp;先生/女士：</h1>";
		?>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;我们非常有幸邀请您参加我们的婚礼。以下信息请您务必知晓:</p>
        </div>
        <div class="com-apple-iweb-widget-GoogleMap aboveStrokesAndFrames stroke_0" id="widget1" style="height: 329px; left: 1px; opacity: 1.00; position: relative; top: 2px; width: 697px; z-index: 1; ">
          <iframe id="widget1-iframe" name="widget1-iframe" src="http://www.me.com/st/1/sharedassets/maps/iweb2/?center=31.677069%2C121.540074&amp;zoomLevel=16&amp;showZoom=1&amp;mapType=m&amp;locatedAddress=%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%B4%87%E6%98%8E%E5%8E%BF%E9%BB%84%E6%B2%B3%E8%B7%AF8%E5%8F%B7%E7%80%9B%E9%83%BD%E5%AE%BE%E9%A6%86%20%E9%82%AE%E6%94%BF%E7%BC%96%E7%A0%81%3A%20202178&amp;locatedAddressPoint=31.675652%2C121.540069&amp;showInfo=1&amp;language=zh-Hans&amp;showGoogleBar=1" width="100%" height="100%" scrolling="no" marginheight="0" marginwidth="0" frameborder="0"></iframe>
        </div>
        <script type="text/javascript"><!--//--><![CDATA[//><!--
new GoogleMap('widget1', 'invitation/Scripts/Widgets/GoogleMap', 'invitation/Scripts/Widgets/SharedResources', '.', {"locatedAddressPoint": "31.675652,121.540069", "showGoogleBar": "1", "showInfo": "1", "locatedAddressIsFromGeocoder": "1", "language": "zh-Hans", "showMarker": "1", "showZoom": "1", "mapType": "m", "locatedAddress": "中国上海市崇明县黄河路8号瀛都宾馆 邮政编码: 202178", "unlocatedAddress": "", "zoomLevel": "16", "center": "31.677069,121.540074"});
//--><!]]></script>
        <p></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;婚礼将于2011年4月23日（周六）下午5点正式开始。</p>
        <p></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;我们诚挚地期待您的见证。</p>
        <p></p>
        <p></p>
        <p></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;ps：有任何情况以及需要请直接联系Spencer或Emily。</p>
        <div style="height: 480px; line-height: 480px; " class="spacer">&nbsp;</div>
      </div>
      <div style="height: 150px; margin-left: 0px; position: relative; width: 700px; z-index: 15; " id="footer_layer">
        <div style="height: 0px; line-height: 0px; " class="bumper">&nbsp;</div>
      </div>
    </div>
  </div>
</div>
<?php
	  $checkin ="update invitation set checkin = 1 where name = \"".$name."\"";
	  $resultci = mysqli_query($connect,$checkin);
	  if (!$resultci) {
		  echo "<p>check in failed, try again later</p>";
		  exit;
	  }
	  $connect->close();
	  exit;
	  }
?>
</body>
</html>