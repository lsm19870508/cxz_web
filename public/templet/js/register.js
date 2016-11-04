$(function () {
    $("#submit").click(function ()
    {
        var username = $("#Uname").val();
        var password = $("#Upass").val();
        var password1 = $("#Upass1").val();
        var Email = $("#Uemail").val();

        var age = $("#nianling").val();
        var address = $("#add").val();
        var phone = $("#Umtel").val();
        if (password !== password1) {
            $("#Upass").css("border", "1px solid red");
            $("#Upass1").css("border", "1px solid red");
        }
        else if (phone.length != 12)
            $("#Umtel").css("border", "1px solid red");
        else
        {
            var data = { "Email": Email, "password": password };
            $.ajax({
                url: 'http://192.168.1.108:18500/register',
                type: 'get',
                data: data,
                success: function (data, status) {
                    if (status == 'success') {
                        location.href = 'login';
                    }
                },
                error: function (data, err) {
                    location.href = 'register';
                    console.log(data + "xxxxxxxx");
                }
            });
        }

    }
    )
    
}
)