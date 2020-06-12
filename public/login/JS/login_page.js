$(document).ready(function () {

    $("#username_guide").hide() 

    $("#login_submission").click(function (event) {

        var userName = $("#username").val()
        var passWord = $("#password").val()
        var dataForServer = { userName: userName, passWord: passWord };
        $.post("/user/login", dataForServer, function (data, status) {
            var a = JSON.stringify(data)

            alert(a);

            if (a == "true") {
                window.location.href = "../../userpage/index.html"
            }
        });

    });
});