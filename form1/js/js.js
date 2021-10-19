$(document).ready(function() {
    function refresh() {
        window.location.reload();
    }
    $("createYourOwn").hide(2000, function() {
        $("createYourOwn").show(2000);
    });
})