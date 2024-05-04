function searchProduct(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('key');
    let productList = document.querySelector('#menuSearch');
    for(i=0; i<localStorage.length; i++){
        if(localStorage.key(i).startsWith('sp')){
            var pd = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if(pd.name.toLowerCase().includes(code.toLowerCase())){
                productList.innerHTML += `
                <div class="cate-item">
                <a href="/detail.html?id=${localStorage.key(i)}"><img class="item-img" src="${pd.img}" alt=""></a>
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
                    <button class="btn btn-primary" style="font-size: 14px; font-weight: 700;" onclick="addToCart('${localStorage.key(i)}')">Thêm vào giỏ</button>
                </div>
                </div>
                  `;
            }
        }
    }

}