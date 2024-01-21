$(function () {
    $('#ChangeToggle').click(function () {
        $('#navbar-hamburger').toggleClass('hidden');
        $('#navbar-close').toggleClass('hidden');
    });
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
