$(document).ready(function () {

    $("#create_team").click(function (event) {

        var Name = $("#username").val()
        var Description = $("#desc").val()
        var dataForServer = { Name: Name, Description: Description };
        $.post("/user/newteam", dataForServer, function (data, status) {
            var a = JSON.stringify(data)

            alert(a);
        });

    });
});