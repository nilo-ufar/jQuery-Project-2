$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $("#top").css({
            bottom: "20px",
        });
    } else {
        $("#top").css({
            bottom: "-60px",
        });
    }
});

$("#top").click(function (e) {
    e.preventDefault();
    $("body,html").animate(
        {
            scrollTop: 0,
        },
        1000
    );
});
