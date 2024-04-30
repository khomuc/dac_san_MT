var user = {
    "us1":{
        "mail": "leminhkha@gmail.com",
        "password": "12345",
    },
}
var users = {
  us1:{
      mail: "leminhkha@gmail.com",
      password: "12345",
      name: "Lê Minh Kha",
      address: "Ninh Kiều, Cần Thơ",
      img:"./public/img/users/userLMK.jpg"
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
        window.location.replace("/index.html");
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
    <a class="dropdown-item" href="/login.html">Đăng nhập</a>
    `;
  }else{
    u.innerHTML +=`
    <img id="avatar" class="rounded-circle dropdown-toggle" style="width: 50px" src="./public/img/users/userLMK.jpg" alt="avatar"></img>
    `;
  }
}