    
	// carousel: set first item(class) to active
	window.onload = function() {
	    var x = document.getElementsByClassName("item").length;
	    console.log(x);
	    var allItems = document.getElementsByClassName("item");
	    allItems[0].className += ' active'
	}