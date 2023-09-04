var link_phone = "+972 52 420 5851";
var link_email = "ehud8vardi@gmail.com";
var link_homepage = "https://www.ehudvardi.github.io";
var link_linkedin = "https://www.linkedin.com/in/ehudvardi";
var link_location = "Ra'anana, IL";



// Wait for the page to fully load before attaching the event listeners
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByClassName("link");
    
    // Loop through the elements and attach the event listener to each
    for (var i = 0; i < elements.length; i++) {
		
		elementC = elements[i];
		switch (elementC.id) {
		case "phone":
			elementC.textContent = link_phone;
			elementC.addEventListener("click", function() {
				// alert("phone");
			});
			break; 
		case "email":
			elementC.textContent = link_email;
			elementC.addEventListener("click", function() {
				window.location.href = "mailto:" + link_email;
			});
			break; 
		case "homepage":
			elementC.textContent = link_homepage.replace("https://www.","");
			elementC.addEventListener("click", function() {
				window.open(link_homepage, "_blank");
			});
			break; 
		case "linkedin":
			elementC.textContent = link_linkedin.replace("https://www.","");
			elementC.addEventListener("click", function() {
				window.open(link_linkedin, "_blank");
			});
			break; 
		case "location":
			elementC.textContent = link_location;
			elementC.addEventListener("click", function() {
				window.open("http://maps.google.com/?q=" + link_location);
			});
			break; 
		default:
			console.log(`default`);
		}
    }
});

