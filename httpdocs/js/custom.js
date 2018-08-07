document.addEventListener('DOMContentLoaded', function () {
	//FOUC solution
	setTimeout(() => {
		document.getElementsByTagName('body')[0].style.visibility = 'visible'
	}, 100);

	///highlight nav bar based on location
	var url = location.href.split("/");
	var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
	var i = 0;
	var currentPage = url[url.length - 1];
	for (i; i < navLinks.length; i++) {
		var lb = navLinks[i].href.split("/");
		if (lb[lb.length - 1] == currentPage) {
			navLinks[i].id = "current";
		}
	}

	//update copywrite date
	document.getElementById('year').innerHTML = new Date().getFullYear()
}, false);



