$(document).ready(function()
{
    $("#imgAnimate").hover(
        function()
        {
            $(this).attr("src", "images/logo-ani.gif");
        },
        function()
        {
            $(this).attr("src", "images/logo.png");
        });
});