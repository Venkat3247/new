var productcontainer = document.getElementById("product");
var search = document.querySelector("product-search"); // Assuming the search input has id="search"
var productbox = productcontainer.querySelectorAll("div");

product-search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();
    
    for (count = 0; count < productbox.length; count++) {
        var productname = productbox[count].querySelector("p").textContent; // Corrected "textContent"
        
        // Check if the product name contains the entered value
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) { // Corrected "indexOf"
            productbox[count].style.display = "none"; // Hide product if not found
        } else {
            productbox[count].style.display = "block"; // Show product if found
        }
    }
});