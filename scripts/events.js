var link_homepage = "https://www.ehudvardi.github.io";

// Wait for the page to fully load before attaching the event listeners
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByClassName("link");
    
    // Loop through the elements and attach the event listener to each
    for (var i = 0; i < elements.length; i++) {
		
		elementC = elements[i];
		switch (elementC.id) {
		case "phone":
			elementC.addEventListener("click", function() {
				alert("phone");
			});
			break; 
		case "email":
			elementC.addEventListener("click", function() {
				alert("email");
			});
			break; 
		case "homepage":
			elementC.textContent = link_homepage;
			elementC.addEventListener("click", function() {
				window.open(link_homepage, "_blank");
			});
			break; 
		case "linkedin":
			elementC.addEventListener("click", function() {
				alert("linkedin");
			});
			break; 
		case "location":
			elementC.addEventListener("click", function() {
				alert("location");
			});
			break; 
		default:
			console.log(`default`);
		}
    }
});

