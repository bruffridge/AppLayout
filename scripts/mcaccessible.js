sfHover = function() {
	var sfEls = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onfocus=function() {
			this.className+=(this.className.length>0? " ": "") + "sfhover";
		}
		sfEls[i].onfocusout=function() {
			this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
		}
	}
}
mcAccessible = function() {
	var mcEls = document.getElementById("nav").getElementsByTagName("A");
	for (var i=0; i<mcEls.length; i++) {
		mcEls[i].onfocus=function() {
			this.className+=(this.className.length>0? " ": "") + "sffocus"; //a:focus
			this.parentNode.className+=(this.parentNode.className.length>0? " ": "") + "sfhover"; //li < a:focus
			if(this.parentNode.parentNode.parentNode.nodeName == "LI") {
				this.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sfhover"; //li < ul < li < a:focus
				if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "LI") {
					this.parentNode.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.parentNode.className.length>0? " ": "") + "sfhover"; //li < ul < li < ul < li < a:focus
				}
			}
		}
		mcEls[i].onblur=function() {
			this.className=this.className.replace(new RegExp("( ?|^)sffocus\\b"), "");
			this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
			if(this.parentNode.parentNode.parentNode.nodeName == "LI") {
				this.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
				if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "LI") {
					this.parentNode.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
				}
			}
		}
	}
}

// only ie needs the sfHover script. all need the accessibility script...
// thanks http://www.brothercake.com/site/resources/scripts/onload/
if(window.addEventListener) window.addEventListener('load', mcAccessible, false); // gecko, safari, konqueror and standard
else if(document.addEventListener) document.addEventListener('load', mcAccessible, false); // opera 7
else if(window.attachEvent) { // win/ie
	window.attachEvent('onload', sfHover);
	window.attachEvent('onload', mcAccessible);
} else { // mac/ie5
	if(typeof window.onload == 'function') {
		var existing = onload;
		window.onload = function() {
			existing();
			sfHover();
			mcAccessible();
		}
	} else {
		window.onload = function() {
			sfHover();
			mcAccessible();
		}
	}
}