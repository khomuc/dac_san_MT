var user = {
    "us1":{
        "mail": "thaob2205959@gmail.com",
        "password": "12345",
    },
    "us2":{
      "mail": "anhb2204916@gmail.com",
      "password": "12345",
  },
}
var users = {
  us1:{
      mail: "thaob2205959@gmail.com",
      password: "12345",
      name: "Trần Thị Phương Thảo",
      address: "288/CMT8, Bình Thủy, Cần Thơ",
      img:"./public/images/giothieu/avt.jpg"
  },
  us2:{
    mail: "anhb2204916@gmail.com",
    password: "12345",
    name: "Lý Minh Anh",
    address: "Ninh Kiều, Cần Thơ",
    img:"./public/images/giothieu/avt2.jpg"
},
}

function dangnhap(event) {

    event.preventDefault();
    var username = document.getElementById('floatingInputEmail').value;
    var pass = document.getElementById('floatingPassword').value;
    var len = Object.keys(user).length;
    for (i = 1; i <= len; i++) {
      if (username == user["us" + i].mail && pass == user["us" + i].password) {
        alert("đúng");
        localStorage.setItem("user","us"+i);
        window.location.replace("/home.html");
        break;
      } else {
        if (i == len && (username != user["us" + len].mail || pass != user["us" + len].password)) {
          alert("sai")
        }
      }
  }
}

function showUser(){
  let u = document.querySelector('#menu-dropdown');
  if(localStorage.getItem("user")==null){
    u.innerHTML +=`
    <a class="" href="/login5.html" style="width=20px;">Đăng nhập</a>
    `;
  }else{
    u.innerHTML +=`
    <img id="avatar" class="rounded-circle dropdown-toggle" style="width: 50px" src="./public/images/giothieu/avt.jpg" alt="avatar"></img>
    <ul id="sub-nav" class="position-absolute top-100 end-0">
              <li><a class="dropdown-item" href="profile.html"><i class="fas fa-user me-2"></i>Cá
                  nhân</a></li>
              <li><a class="dropdown-item" href="login5.html"><i class="fas fa-sign-out-alt me-2"></i>Đăng
                  xuất</a></li>
            </ul>
    `;
  }
}
/*NÚT ON TOP*/

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}