$(document).ready(function () {

    var correctAnswerCount = 0;
    var incorrectAnswerCount = 0;

    function resetWinLoss() {
        $(".correct").text(correctAnswerCount = 0);
        $(".incorrect").text(incorrectAnswerCount = 0);
    };

    $("#start").on("click", function () {
        resetWinLoss();

        var start = new Date().getTime();

        var clock = setInterval(function () {

            var now = new Date().getTime();
            var timePassed = now - start;

            var timer = (Math.ceil(60 - timePassed / 1000))
            $("#timer").text(timer);
            if (timer === 0) {
                alert("Times up!");
                clearInterval(clock);
            }
        }, 1000);

        $(".myForm").submit(function (event) {
            resetWinLoss();

            event.preventDefault();

            $("input:checked").each(function () {
                var answer = $(this).val()

                if (answer == "ans") {
                    correctAnswerCount += 1;

                } else if (answer == "inc") {
                    incorrectAnswerCount += 1
                };

            });

            $(".correct").text(correctAnswerCount);
            $(".incorrect").text(incorrectAnswerCount);
            clearInterval(clock);
        });

    });

});