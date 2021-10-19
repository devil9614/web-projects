let count = 0;


function titleClick() {
    count += 1
    if (count <= 5) {
        document.getElementById("titleHeading").innerHTML = "Why Are you Clicking me";
    }
    if (count > 5 && count <= 10) {
        document.getElementById("titleHeading").innerHTML = "Stop Clicking Me";
    }
    if (count > 10) {
        // count = 0;
        document.getElementById("titleHeading").innerHTML = "Learing Again jQuery No more click";
    }
}
$(document).ready(function() {
    $('p').on({
        mouseenter: function() {
            $(this).hide(1000);
        },
        mouseleave: function() {
            $(this).show(1000);
        }
    })
    let cll = 0
    $("#btn").dblclick(function() {
        cll++;
        if (cll % 2 == 0) {
            document.getElementById("btn").innerHTML = "HIDE";
            $("#titleHeading").show(2000);
        } else {
            document.getElementById("btn").innerHTML = "SHOW";
            $("#titleHeading").hide(2000);
        }
    })
})
$('h1').hide(1000, function() {
    $('h1').show(1000);
});