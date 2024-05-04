var dbProducts = {
    sp1:{
        id:1,
        name: "Bánh canh cua",
        weigth: "100",
        price: "30.000đ",
        img:"/public/img/img_đs/BanhCanhCua.png"
    },

    sp2:{
        id:2,
        name: "Bánh Giá",
        weigth: "100",
        price: "20.000đ",
        img:"/public/img/img_đs/BanhGia.png"
    },

    sp3:{
        id:3,
        name: "Bánh mì chảo",
        weigth: "500",
        price: "20.000đ",
        img:"/public/img/img_đs/BanhMiChao.jpg"
    },

    sp4:{
        id:4,
        name: "Bánh tét",
        weigth: "500",
        price: "15.000đ",
        img:"/public/img/img_đs/BanhTet.png"
    },

    sp5:{
        id:5,
        name: "Bún nước kèn",
        weigth: "500",
        price: "20.000đ",
        img:"/public/img/img_đs/BunNuocKen.jpg"
    },

    sp6:{
        id:6,
        name: "Bún nước lèo",
        weigth: "500",
        price: "20.000đ",
        img:"/public/img/img_đs/BunNuocLeo.png"
    },

    sp7:{
        id:7,
        name: "Cơm tấm",
        weigth: "500",
        price: "25.000đ",
        img:"/public/img/img_đs/ComTam.jpg"
    },

    sp8:{
        id:8,
        name: "Hủ tiếu",
        weigth: "500",
        price: "25.000đ",
        img:"/public/img/img_đs/HuTieu.png"
    }

    sp9:{
        id:9,
        name: "Kẹo dừa",
        weigth: "500",
        price: "25.000đ",
        img:"/public/img/img_đs/KeoDua.png"
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