	
	var x = document.getElementsByClassName("item").length;
	var i;

	for (i = 0; i < x; i++) {
		document.getElementsByClassName("items_length")[i].innerHTML = x;
		document.getElementsByClassName("current_item")[i].innerHTML = i + 1;
	}