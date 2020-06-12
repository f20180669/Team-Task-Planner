$(document).ready(function () {

    $("#username_guide").hide()

    $("#login_submission").click(function (event) {

        var userName = $("#username").val()
        var passWord = $("#password").val()
        var name = $("#name").val()
        var dob = $("#dob").val()
        var company = $("#company").val()
        var dataForServer = { userName: userName, passWord: passWord, name: name, dob: dob, company: company };
        $.post("/user/signup", dataForServer, function (data, status) {
            var a = JSON.stringify(data)

            alert(a);
        });

    });
});