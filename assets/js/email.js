/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	$(document).ready(function() {
	  // Get the modal
	  var modal = document.getElementById("myModal");

	  // Check if modal exists
	  if (!modal) {
		console.error("Modal element not found");
		return;
	  }

	  // Get the link that opens the modal
	  var btn = document.getElementById("openModal");

	  // Check if button exists
	  if (!btn) {
		console.error("Button element not found");
		return;
	  }

	  // Get the <span> element that closes the modal
	  var span = document.getElementsByClassName("close")[0];

	  // Check if close button exists
	  if (!span) {
		console.error("Close button element not found");
		return;
	  }

	  // When the user clicks on the link, open the modal
	  btn.onclick = function(event) {
		event.preventDefault(); // Prevent default link behavior
		modal.style.display = "block";
		console.log("Modal opened");
	  }

	  // When the user clicks on <span> (x), close the modal
	  span.onclick = function() {
		modal.style.display = "none";
		console.log("Modal closed");
	  }

	  // When the user clicks anywhere outside of the modal, close it
	  window.onclick = function(event) {
		if (event.target == modal) {
		  modal.style.display = "none";
		  console.log("Clicked outside modal, modal closed");
		}
	  }

	  // Handle form submission
	  document.getElementById('emailForm').addEventListener('submit', function(event) {
		event.preventDefault();

		const to = document.getElementById('to').value;
		const subject = document.getElementById('subject').value;
		const message = document.getElementById('message').value;
		const from = document.getElementById('from').value;

		emailjs.send('service_59xi6lc', 'template_r4r5ni1', {
		  to_name: to,
		  from_name: from,
		  message: message,
		  subject: subject
		})
		.then(function(response) {
		  document.getElementById('response').innerText = 'Email sent successfully';
		  modal.style.display = "none";
		}, function(error) {
		  document.getElementById('response').innerText = 'Failed to send email: ' + JSON.stringify(error);
		});
	  });
	});
  })(jQuery);
