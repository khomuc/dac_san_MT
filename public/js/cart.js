// let dbProducts = {
//     sp1:{
//         id:1,
//         name: "Hành",
//         weigth: "100",
//         price: "5000",
//         img:"/public/img/vegetables/43.jpg"
//     },

//     sp2:{
//         id:2,
//         name: "Bắp non",
//         weigth: "100",
//         price: "5000",
//         img:"/public/img/vegetables/5.jpg"
//     },

//     sp3:{
//         id:3,
//         name: "Bầu",
//         weigth: "500",
//         price: "15000",
//         img:"/public/img/vegetables/6.jpg"
//     },

//     sp4:{
//         id:4,
//         name: "Bí đao",
//         weigth: "500",
//         price: "13000",
//         img:"/public/img/vegetables/7.jpg"
//     },

//     sp5:{
//         id:5,
//         name: "Bí đỏ",
//         weigth: "500",
//         price: "12000",
//         img:"/public/img/vegetables/8.jpg"
//     },

//     sp6:{
//         id:6,
//         name: "Bí ngòi xanh",
//         weigth: "500",
//         price: "18000",
//         img:"/public/img/vegetables/9.jpg"
//     },

//     sp7:{
//         id:7,
//         name: "Bông bí",
//         weigth: "500",
//         price: "22000",
//         img:"/public/img/vegetables/10.jpg"
//     },

//     sp8:{
//         id:8,
//         name: "Bông hẹ",
//         weigth: "500",
//         price: "20000",
//         img:"/public/img/vegetables/11.jpg"
//     }
// }

var users = {
    us1:{
        mail: "leminhkha@gmail.com",
        password: "12345",
        name: "Lê Minh Kha",
        address: "Ninh Kiều, Cần Thơ",
        img:"./public/img/users/userLMK.jpg"
    },
  }


function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        window.localStorage.removeItem(code);
        document.getElementById("cart").getElementsByTagName('tbody')[0].innerHTML = "";
        showCart();
    }
}

function addToCart(code){

    if(localStorage.getItem("user")==null){
        launch_toast_no("Bạn phải đăng nhập!");
    }else{
        if(localStorage.getItem('cart-'+code)==null){
            localStorage.setItem('cart-'+code,1);
        }else{
            var current = parseInt(localStorage.getItem('cart-'+code));
            localStorage.setItem('cart-'+code,current+1)
        }
        launch_toast_yes("Đã thêm vào giỏ hàng!");  
    }
}

var total_price = 0;
function showCart(){
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    for(i = 0 ; i < window.localStorage.length; i++){
        var key = localStorage.key(i); //Hiện ra tên của key thứ i là sp1
        //var sl = localStorage.getItem(key);
        
        if(key.startsWith('cart')){
            var tr = document.createElement("tr");
            document.getElementById('tbody').append(tr);    
            var sl = localStorage.getItem(key);
            //var product = dbProducts[key.substring(5,key.length)]; //key = cart-sp1
            var pd = JSON.parse(localStorage.getItem(key.substring(5,key.length)));
            //console.log(product);
            if(sl>0){
                tr.innerHTML = "<td data-th='' style='width:15%'>"+
                "<img src='"+pd.img+"' class='img-responsive' width='100'></td>"+
                "<td class='product-name' style='width:15%'> <h5 class='nomargin'>"+pd.name+"</h5></td>"+
                "<td data-th='Trọng lượng'>"+pd.weigth+"g</td>"+
                "<td data-th='Đơn giá'>"+pd.price+"đ</td>"+
                "<td data-th='Số lượng'>"+
                "<button type='button' class='btn btn-light p-2 m-2' onclick='subQuantity(\"" + key + "\")'>-</button>" + sl + "<button type='button' class='btn btn-light p-2 m-2' onclick='addQuantity(\"" + key + "\")'>+</button>"+"</td>"+
                "<td data-th='Thành tiền'>"+(sl*pd.price)+"đ</td>"+
                "<td class='actions' data-th='Xóa sản phẩm'>"+
                "<button class='btn btn-danger btn-sm' onclick='removeCart(\"" + key + "\")'><i class='fas fa-trash'></i></button></td>";
            }
            total_price = total_price+(sl*pd.price);
        }
        document.getElementById('totalPrice').innerHTML = formatter.format(total_price);
    } 
}

function test(){
    localStorage.clear();
}

function subQuantity(code) {
    let current = parseInt(window.localStorage.getItem(code))
    if (current == 1) {
        alert("Số lượng sản phẩm đã đạt mức tối thiểu")
    } else {
        if (current - 1 < 1) {
            window.localStorage.setItem(code, 1)
            alert("Số lượng đã đạt mức tối thiểu.");
        } else {
            window.localStorage.setItem(code, current - 1)
        }
    }
    location.reload();
}

function addQuantity(code) {
    let current = parseInt(window.localStorage.getItem(code))
    if (current == 100) {
        alert("Số lượng sản phẩm đã đạt giới hạn")
    } else {
        if (current + 1 > 100) {
            window.localStorage.setItem(code, 100)
            alert("Đã quá giới hạn. Tổng số lượng hiện tại trong giỏ là: 100.");
        } else {
            window.localStorage.setItem(code, current + 1)
        }
        location.reload();
    }
}

if (location.reload) {
    showCart();
}

//Show message that adding cakes to cart is successful
function launch_toast_yes(message) {
    var x = document.getElementById("toast-yes")
    document.getElementById("toast-yes-desc").innerText = message;
    x.className = "show";
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
    }, 5000);
}

//Show message that adding cakes to cart is failed
function launch_toast_no(message) {
    var x = document.getElementById("toast-no")
    document.getElementById("toast-no-desc").innerText = message;
    x.className = "show";
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
    }, 5000);
}

function setCurrentOrderIndex(){
    if(!localStorage.getItem("orderIndex")){
        localStorage.setItem("orderIndex", 0);
    }
}

function book(){
    alert("Kiểm tra lại thông tin đặt chính là thông tin của tài khoản này!")
    var check = confirm('Bạn có muốn đặt đơn hàng này?');
    if(check==true){
        let orderIndex = Number(localStorage.getItem("orderIndex"));
        let items = [];
    
        for(i=0; i<localStorage.length; i++){
            var key = localStorage.key(i);
            if(key.startsWith("cart")){
                var amount = localStorage.getItem(key);
                //var product = dbProducts[key.substring(5,key.length)];
                var pd = JSON.parse(localStorage.getItem(key.substring(5,key.length)));
                items.push({
                    name: pd.name,
                    quantity: amount,
                    price: pd.price,
                    img: pd.img
                });
            }
        }
    
        let currentUser = users[localStorage.getItem("user")];
    
        var orderDetail = {
            orderedItems: items,
            user: currentUser,
            status: 'Chờ xử lý',
            total: total_price
        }
        
        localStorage.setItem("order"+(orderIndex+1), JSON.stringify(orderDetail));
        localStorage.setItem("orderIndex", orderIndex+1);
    
        for(i=0; i<localStorage.length; i++){
            var key = localStorage.key(i);
            if(key.startsWith("cart")){
                localStorage.removeItem(key);
            }
            location.reload();
        }
    }
}




function getDateTimeCurrent(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
 
    document.getElementById('dtCurrent').innerHTML = dateTime;
}

function showOrderHistory(){
    for(i=0; i<localStorage.length; i++){
        var key = localStorage.key(i);
        if(key.startsWith("order") && key!="orderIndex"){
            var order = JSON.parse(localStorage.getItem(key));
            let orderList = document.querySelector('#orderList');
            orderList.innerHTML += `
            <div class="history" id="${key}">
                <div class="history-title">Mã đơn hàng: #${key}</div>
            `; 
            let orderDetail = document.querySelector('#'+key);
            for(j=0; j<order.orderedItems.length ; j++){
                orderDetail.innerHTML += `
                <div class="history-content">
                    <div class="history-content-img">
                            <img src="${order.orderedItems[j].img}" alt="" class=>
                    </div>
                    <div class="history-content-decs">
                        <p class="cake-name"><b>${order.orderedItems[j].name}</b></p>
                        <p class="cake-price" style="color: var(--main-color)">Giá tiền: ${order.orderedItems[j].price} VND</p>
                        <p class="cake-quantity">Số lượng: ${order.orderedItems[j].quantity}</p>
                    </div>
                </div>
                `;
            }
            orderDetail.innerHTML +=`
                <div class="history-ending">
                    <div class="history-ending1">
                        <p class="history-ending-content">Tổng tiền: </p>
                        <p class="history-ending-content" style="color: var(--main-color)">${order.total} VND</p>
                    </div>
                    <div class="history-ending2">
                        <p class="history-ending-content">Trạng thái: </p>
                        <p class="history-ending-content" style="color: var(--main-color)">Chờ xử lý</p>
                    </div>
                </div>
            </div>
            `;
        }
    }  
}