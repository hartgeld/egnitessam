    
	window.onload = function() {
		// carousel: set first item(class) to active
	    var x = document.getElementsByClassName("item").length;
	    console.log(x);
	    var allItems = document.getElementsByClassName("item");
	    allItems[0].className += ' active'
	}

		//BACKUPZ
	    //carousel_pager set first pagerItem(class) to active 
	    /*var allPagerItems = document.getElementsByClassName("pager-item");
	    allPagerItems[0].className += ' active'*/