
function validate() {
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let message = document.getElementById("text");
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let message1 = document.getElementById("text2");
    
    if (lastName == "" || firstName =="" ) {
           message.innerHTML = "Nhập đầy đủ Họ, Tên và Email ";
            message.style.color = "red";
    }
    else {
        message.innerHTML = "Thông tin hợp lệ!";
        message.style.color = "blue";
    }

    if (password == "" || confirm_password == "") {
        message1.innerHTML = "Nhập mật khẩu";
        message1.style.color = "red";
    }
}

function change_color() {
    let lastName = document.getElementById("lastName");
    lastName.style.border = "solid 2px blue";
    let firstName = document.getElementById("firstName");
    firstName.style.border = "solid 2px blue";
    let usename = document.getElementById("usename");
    usename.style.border = "solid 2px blue";
    let password = document.getElementById ("password");
    password.style.border = "solid 2px blue";
    let confirm_password = document.getElementById("confirm_password");
    confirm_password.style.border = "solid 2px blue";
}

function check() {
    let password = document.getElementById("password").value.length;
    let confirm_password = document.getElementById("confirm_password").value.length;
    let message = document.getElementById("text2");
    if (8 <= password  && password <= 16) {
        message.innerHTML = "Mật khẩu hợp lệ";
        message.style.color = "blue";
        if (password === confirm_password) {
            message.innerHTML = "Mật khẩu hợp lệ";
            message.style.color = "blue";
        }
        else {
            message.innerHTML = "Mật khẩu xác nhận không đúng";
            message.style.color = "red";
        }
    }
    else {
        message.innerHTML = "Mật khẩu không hợp lệ";
        message.style.color = "red";
    }
    
}

function show_password() {
    let passField = document.querySelector("input#password");
    let showBtn = document.querySelector("input#checkbox1");
    let confirm_password = document.getElementById("confirm_password");
    if(passField.type === "password") {
      passField.type = "text";
      showBtn.classList.add("hide-btn");
    }else{
      passField.type = "password";
      showBtn.classList.remove("hide-btn");
    }
    if(confirm_password.type === "password") {
        confirm_password.type = "text";
        showBtn.classList.add("hide-btn");
      }else{
        confirm_password.type = "password";
        showBtn.classList.remove("hide-btn");
      }
    
}

function password_strength(){
    let strength = document.querySelector("span#text2");
    let strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    let mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    let enoughRegex = new RegExp("(?=.{8,}).*", "g");
    let pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Nhập mật khẩu';
        strength.style,color = "red";
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'Bạn hãy nhập thêm kí tự';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Độ mạnh mật khẩu : Cao!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Độ mạnh mật khẩu : Trung bình!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Độ mạnh mật khẩu : Yếu!</span>';
    }
}


