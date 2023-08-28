$(document).ready(function() {
    $("button").click(function() {
        if ($("#phone").val().length < 11 || $("#message").val() === "") {
            var E;
            if ($("#phone").val().length < 11)
                E = "手机号码长度错误，请重新输入！\n";
            if ($("#message").val() === "") {
                if (E == undefined)
                    E = "信的内容不能为空，请重新输入！";
                else
                    E += "信的内容不能为空，请重新输入！";
            }
            alert(E);
            return;
        }
        var data = {
            "message": $('#message').val(),
            "phone": $('#phone').val(),
            "open": $('#open:checked').val()
        }
        console.log(data);
        fetch("https://www.scutwei.ltd/api/data", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                var s = result.status;
                if (s == 200) {
                    $(".page1").hide();
                    $(".page2").show();
                    alert("投递成功！")
                } else alert("投递失败！")
            }).catch(error => {
                console.log("error", error);
                alert("网络出错了！ 请稍后再试！");
            });
    })
})