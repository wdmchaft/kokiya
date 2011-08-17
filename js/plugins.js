
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;  
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

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