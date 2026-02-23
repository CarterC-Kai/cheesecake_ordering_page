// Made by: Carter Chan
$(document).ready(function() {
	$("#placeOrder").click(function() {
		let orderDetails = "";
		let toppingString = "";
		
		// should get the selected topping
		if (document.getElementById('blueberry').checked) {
			toppingString = "Blueberry"
		}
		else if (document.getElementById('strawberry').checked) {
			toppingString = "Strawberry"
		}
		else if (document.getElementById('wildberry').checked) {
			toppingString = "Wildberry"
		}
		else {
			toppingString = "Plain"
		}
		
		// should get the selected number of cheesecakes
		var dropdown = document.getElementById('quantityOfCheesecakes');
		var numberOfCheesecakes = dropdown.value;
		
		// checks if the word vegan is written in notes
		var textarea = document.getElementById('notes');
		var vegan = "vegan";
		var comments = textarea.value;
		
		// checks if the word vegan is in the notes section
		// and asks for confirmation
		if (comments.includes(vegan)) {
			if (!confirm("Cheesecake contains dairy. Do you wish to order?")) {
				return;
			}
		}
		
		orderDetails = "Ordered: " + numberOfCheesecakes + " " + toppingString + " Cheesecake(s)";
			
		
		$("#orderInfo").replaceWith("<h2>Thank you for placing your order!</h2><p>" + orderDetails + "</p>");
		
	})

	$.post("/orders", function(data) {
		// create a string to display the order history
		let orderHistory = "";
		let i = 0;

		// loop through the data to concatenate to the order history string
		for (i = 0; i < data.length; i++) {
			orderHistory += data[i].quantity + " " + data[i].topping + " <br>";
		}

		// display the order history string
		$("#orderHistory").html(orderHistory);
	});
});