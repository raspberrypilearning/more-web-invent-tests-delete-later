//Javascript for DOM Manipulation
document.getElementById("orderButton").addEventListener("click", function(){
    // Get pizza size
    var pizzaSize = document.getElementById("pizzaSize").value;

    // Get selected toppings
    var selectedToppings =[];
    var checkboxes = document.getElementsByName(topping);
    for (var i =0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedToppings.push(checkboxes[i].value);
        }
    }

    //Display user's order
    var orderSummary = "You ordered a" + pizzaSize + "pizza with ";
    if (selectedToppings.length === 0) {
        orderSummary += "no toppings. ";
    } else {
        orderSummary += "the following toppings: " + selectedToppings.join(", ") + ".";
    }

    alert(orderSummary);
});