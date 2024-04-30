function valid(){
    var regfr = document.forms.regfr;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var sdt = document.getElementById("floatingInputPhone").value;
    if(regfr.name.value == ""){
        alert("Vui lòng nhập họ tên !");
        regfr.name.focus();
        return false;
    }
   
    if(regfr.email.value == ""){
        alert("Vui lòng nhập email !");
        regfr.email.focus();
        return false;
    }
    if(!filter.test(regfr.email.value)){
        alert("Hãy nhập đúng định dạng Mail ! Ký tự hoa, thường, đặc biệt - có 1 kí tự @ theo sau là các kí tự ");
        regfr.email.focus();
        return false;
    }
    if(regfr.mk.value == ""){
        alert("Vui lòng nhập mật khẩu !");
        regfr.mk.focus();
        return false;
    }
    if(strongRegex.test(regfr.mk.value) == false){
        alert("Mật khẩu đủ 8 kí tự trong đó phải có ký tự in HOA, thường, ký tự đặc biệt và số !");
        regfr.mk.focus();
        return false;
    }
    if(regfr.pre_mk.value == ""){
        alert("Vui lòng nhập lại mật khẩu !")
        regfr.pre_mk.focus();
        return false;
    }
    if(regfr.mk.value != regfr.pre_mk.value){
        alert("Mật khẩu không trùng khớp - Nhập lại !");
        regfr.pre_mk.focus();
        return false;
    }
    if(regfr.phone.value == ""){
        alert("Vui lòng nhập số điện thoại");
        regfr.phone.focus();
        return false;
    }
    if(sdt.length!=10){
        alert("Số điện thoại phải đủ 10 số - Vui lòng nhập lại !");
        regfr.phone.focus();
        return false;
    }
    if(regfr.address.value == ""){
        regfr.address.focus();
        alert("Vui lòng nhập địa chỉ !");
        return false;
    }
    alert("Đăng ký thành công !");
    return true;
}

