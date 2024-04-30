var dbProducts = {
    sp1:{
        id:1,
        name: "Hành",
        weigth: "100",
        price: "5000",
        img:"/public/img/vegetables/43.jpg"
    },

    sp2:{
        id:2,
        name: "Bắp non",
        weigth: "100",
        price: "5000",
        img:"/public/img/vegetables/5.jpg"
    },

    sp3:{
        id:3,
        name: "Bầu",
        weigth: "500",
        price: "15000",
        img:"/public/img/vegetables/6.jpg"
    },

    sp4:{
        id:4,
        name: "Bí đao",
        weigth: "500",
        price: "13000",
        img:"/public/img/vegetables/7.jpg"
    },

    sp5:{
        id:5,
        name: "Bí đỏ",
        weigth: "500",
        price: "12000",
        img:"/public/img/vegetables/8.jpg"
    },

    sp6:{
        id:6,
        name: "Bí ngòi xanh",
        weigth: "500",
        price: "18000",
        img:"/public/img/vegetables/9.jpg"
    },

    sp7:{
        id:7,
        name: "Bông bí",
        weigth: "500",
        price: "22000",
        img:"/public/img/vegetables/10.jpg"
    },

    sp8:{
        id:8,
        name: "Bông hẹ",
        weigth: "500",
        price: "20000",
        img:"/public/img/vegetables/11.jpg"
    }
}

let size = Object.keys(dbProducts).length;
console.log(size)
function addProductLocal(){
    if(!localStorage.getItem('indexProduct')){
        var indexProduct = 0;
        for(i=1;i<=size; i++){
            localStorage.setItem('sp'+i,JSON.stringify(dbProducts['sp'+i]));
            localStorage.setItem('indexProduct', indexProduct+1);
            indexProduct = indexProduct+1;
        }
    }
}

function showProduct() {
    let productList = document.querySelector('#menuPr');
    let i;
    for (i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if(key.startsWith('sp')){
        var pd = JSON.parse(localStorage.getItem(key));
        productList.innerHTML += `
        <div class="cate-item">
        <a href="/detail.html?id=${key}"><img class="item-img" src="${pd.img}" alt=""></a>
        <h3 class="item-name">${pd.name}</h3>
        <div class="star-vote mt-1">
            <i class="fas fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="fas fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="fas fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="fas fa-star-half-alt" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="far fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
        </div>
        <div class="price-button">
            <p style="color: var(--green); font-weight: 700; font-size:22px; margin-bottom:0; line-height: 38px">${pd.price}đ</p>
            <button class="btn btn-primary" style="font-size: 14px; font-weight: 700;" onclick="addToCart('${key}')">Thêm vào giỏ</button>
        </div>
        </div>
          `;

        }
    }
}

function removeProduct(code) {
    var check = confirm('Bạn có muốn xóa sản phẩm này này?');
    if(check==true){
        if (typeof window.localStorage[code] !== "undefined") {
            window.localStorage.removeItem(code);
            document.getElementById("tbProduct").getElementsByTagName('tbody')[0].innerHTML = "";
            showProductAdmin();
        }
    }
}


function showProductDetail(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('id')
    let productList = document.querySelector('#dtProduct');
    var pd = JSON.parse(localStorage.getItem(code));
    productList.innerHTML += `
    <img class="about-logo w-50" src="${pd.img}" alt="">
    <div id="prDetail" class="about-content mt-4 w-50 ps-5 pt-3">
        <h2 class="about-content-title">${pd.name}</h2>
        <div class="star-vote mt-1 justify-content-start">
            <i class="fas fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="fas fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="fas fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="fas fa-star-half-alt" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
            <i class="far fa-star" style="color: #FFCC33; margin-left:1px; margin-right:1px; font-size: 16px;"></i>
        </div>
        <h5 class="slide-price">${pd.price}đ</h5>
        <p class="detail-content">Khối lượng: <b>${pd.weigth}g</b></p>
        <div class="detail-amount mb-3">
            <p class="d-inline detail-content">Số lượng:</p>
            <input id="detail_amount" class="form-control text-center d-inline w-25" value="2" type="number" min="1" max="10">
        </div>
        <button class="btn btn-primary" onclick="addToCart('${code}')">Thêm vào giỏ</button>
        <div class="detail-bonus mt-4">
            <h5 style="color: var(--bs-primary); font-weight: 600; margin-bottom: 20px;">NGUỒN GỐC SẢN PHẨM</h5>
            <p class="detail-content"><b>Hạt giống:</b>Công ty hạt giống ABC</p>
            <p class="detail-content"><b>Nơi trồng:</b>Hưng Lợi, Ninh Kiều, Cần Thơ</p>
        </div>
        
    </div>`;
}