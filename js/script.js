$(document).ready(function () {
    $("body").on("keyup", "#findEl", function () {
        var searchText = $("#findEl").val().toLowerCase(); 
        $("#unitsContainer .units").each(function () {
            var elem = $(this).find("p"); 
            if (elem.text().toLowerCase().indexOf(searchText) === -1) {
                $(this).slideUp(350);
            } else {
                $(this).slideDown(350);
            }
        });
    });
});
