var link_phone = "+972 52 420 5851";
var link_email = "ehud8vardi@gmail.com";
var link_homepage = "http://ehudvardi.github.io";
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
			elementC.textContent = link_homepage.replace("http://","");
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
	
	// Expand button click event registration
	var expandButton = document.getElementById("expandButtonId");
	var container = document.querySelector('.experience');
	
	expandButton.addEventListener('click', function () {
		expandButton.textContent = (expandButton.textContent.includes("Expand") ? " Click To Retract " : " Click To Expand ");
		container.classList.toggle('expanded');
	});
	
});
