function showProductAdmin() {
    for (i = 0; i < localStorage.length; i++) {
        var tr = document.createElement("tr");
        document.getElementById('tbody').append(tr);
        var key = localStorage.key(i);
        if(key.startsWith('sp')){
            
            var pd = JSON.parse(localStorage.getItem(key));
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
            <button onclick="editProduct('${key}')" type="button" class="btn btn-primary btn-update-different-color" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-whatever="@mdo">Sửa</button>  
            <button type="button" class="btn btn-primary btn-delete-different-color" onclick="removeProduct('${key}')">Xóa</button>
          </td>          
          `;
        }
    }
}

function addNewProduct(){
    var pname = document.getElementById('pname').value;
    var pprice = document.getElementById('pprice').value;
    var pweigth = document.getElementById('pweigth').value;
    var newproduct= {
        id:(Number(localStorage.getItem('indexProduct'))+1),
        name: pname,
        price: pprice,
        weigth: pweigth,
        img: "/public/img/vegetables/14.jpg"
    }
    localStorage.setItem('sp'+(Number(localStorage.getItem('indexProduct'))+1),JSON.stringify(newproduct));
    localStorage.setItem('indexProduct',(Number(localStorage.getItem('indexProduct'))+1));
}

function editProduct(code){
    var epd = JSON.parse(localStorage.getItem(code));
    document.getElementById('editID').value = code;
    document.getElementById('editName').value = epd.name
    document.getElementById('editPrice').value = epd.price
    document.getElementById('editWeigth').value = epd.weigth
    
}

function launch_toast_yes(message) {
  var x = document.getElementById("toast-yes")
  document.getElementById("toast-yes-desc").innerText = message;
  x.className = "show";
  setTimeout(function(){ 
      x.className = x.className.replace("show", ""); 
  }, 5000);
}

function handleEditProduct(){
    var code = document.getElementById('editID').value;
    var editedproduct= {
        id: JSON.parse(localStorage.getItem(code)).id,
        name: document.getElementById('editName').value,
        price: document.getElementById('editPrice').value,
        weigth: document.getElementById('editWeigth').value, 
        img: JSON.parse(localStorage.getItem(code)).img
    }
    localStorage.setItem(code,JSON.stringify(editedproduct));
    launch_toast_yes('Đã sửa thành công');
    location.reload();
}