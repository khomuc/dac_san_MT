function searchProduct(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var code = urlParams.get('key');
    //let productList = document.querySelector('#menuSearch');
    for(i=0; i<localStorage.length; i++){
        var tr = document.createElement("tr");
        document.getElementById('tbody').append(tr);

        if(localStorage.key(i).startsWith('sp')){
            var pd = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if(pd.name.toLowerCase().includes(code.toLowerCase())){
                tr.innerHTML += `
            <td>
            <p class="text-xs text-secondary mb-0">${pd.id}</p>
          </td>
          <td>
            <p class="text-xs text-secondary mb-0">${pd.name}</p>
          </td>
          <td class="align-middle text-center text-sm">
            <p class="text-xs text-secondary mb-0">${pd.price}</p>
          </td>
          <td class="align-middle text-center">
            <p class="text-xs text-secondary mb-0">${pd.weigth}</p>
          </td>
          <td class="align-middle">
            <img src="${pd.img}" class="avatar avatar-sm me-3" alt="user4">
          </td>
          <td style="text-align: center;">
            <button onclick="editProduct('${code}')" type="button" class="btn btn-primary btn-update-different-color" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@mdo">Sửa</button>  
            <button type="button" class="btn btn-primary btn-delete-different-color" onclick="removeProduct('${code}')">Xóa</button>
          </td>          
                  `;
            }
        }
    }

}