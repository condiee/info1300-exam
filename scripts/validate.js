$(document).ready(function() {
    $("#newsletter").on("submit", function() {
        var valid = true;

        if($("#userEmail").prop("validity").valid){
            $("#userEmailError").addClass("hidden");
        } else {
            $("#userEmailError").removeClass("hidden");
            valid = false;
        }

        return valid;

    });

});
