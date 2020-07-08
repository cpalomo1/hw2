//CST 336 Homework 2
//Cristian Palomo-Ramirez
//Date: 7/7/2020

$(document).ready(function() {
    
    //variables
    var subtotal;
    var shipping;
    
    //event listeners
    $("#item1").on("change", getTotal);
    $("#item2").on("change", getTotal);
    $("#choice").on("click", getTotal);
    $("#choice2").on("click", getTotal);
   
   getTotal();
   
    //functions
        function isFormValid() {
            let isValid = true;
                if($("#item1").val() == "" || $("#item1").val() == null || $("#item1").val() < 0) {
                    isValid = false;
                    $("#validationFdbk").html("Must specify quantity");
                }
                if($("#item2").val() == "" || $("#item2").val() == null || $("#item2").val() < 0) {
                    isValid = false;
                    $("#validationFdbk").html("Must specify valid quantity!");
                }
            return isValid;
        }//isFormValid
        
        function getShipping() {
            if ($("#choice").is(":checked")) {
                return 10.0;
            } else {
                return 0.0;
            }
        }//getShipping
    
        function getTotal() {
            
            $("#validationFdbk").html("") //resets validation feedback
                    
            if(!isFormValid()) {
                return;
            }
            
            shipping = getShipping();
            
            let quantity1 = $("#item1").val();
            let quantity2 = $("#item2").val();
            subtotal = (quantity1 * 1099.0) + (quantity2 * 299.00);
            total = (subtotal * 9.75) + shipping;
        
            $("#subtotal").html(`Subtotal: $${subtotal.toFixed(2)}`);
            $("#total").html(`Total (+9.25% tax): $${total.toFixed(2)}`);
        }//getTotal
});//ready