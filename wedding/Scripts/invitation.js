// JavaScript Document
jQuery.noConflict();
jQuery(document).ready(function(){
jQuery(".invip").click(function(){
    jQuery("#invitation").slideToggle("slow");
  });
jQuery("#inviname").click(function(){
	jQuery("#inviname").attr("value","");
	})
});