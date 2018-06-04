var links = document.querySelectorAll('a[href*="#"]');
links = [...links];

links.map(function(key, index) {
	key.addEventListener("click", function(e) {
		e.preventDefault();
		
		var itemID = key.getAttribute('href');
		var itemSelector = document.querySelector(itemID);

		itemSelector.scrollIntoView({
			behavior: 'smooth',
			block:'start'
		});

		window.history.replaceState('Object', 'Title', itemID);
	});
});