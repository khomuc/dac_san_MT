let orderStatus = {
  st1 : "Chưa xử lý",
  st2 : "Đang chuẩn bị",
  st3 : "Đã giao"
}

function showOrderList(){
  for(i=0; i<localStorage.length; i++){
      var key = localStorage.key(i);
      if(key.startsWith("order") && key!="orderIndex"){

          var tr = document.createElement("tr");
          document.getElementById("tbodyOrder").append(tr);
         
          var order = JSON.parse(localStorage.getItem(key));
          tr.innerHTML = "<td><p class='text-xs text-secondary mb-0'>#"+localStorage.key(i).slice(5)+"</p></td>"+
          "<td><p class='text-xs text-secondary mb-0'>"+order.user.name+"</p></td>"+
          "<td><p class='text-xs text-secondary mb-0'>"+order.user.address+"</p></td>"+
          "<td><p id='dtCurrent' class='text-xs text-secondary mb-0'>"+setDate().toString()+"</p></td>"+
          "<td><p id='dtNext' class='text-xs text-secondary mb-0'>"+setNext().toString()+"</p></td>"+
          "<td class='align-middle'>"+
          "<select id='selectStatus-"+key+"' onchange=handleUpdateStatus("+ '"'+localStorage.key(i)+ '"' + ") class='form-select' aria-label='Default select example'>"+
          "</select></td>"+
          "<td><button onclick=showOrderDetail("+ '"'+localStorage.key(i).toString()+ '"' + ") type='button' class='btn btn-primary btn-add-different-color' data-bs-toggle='modal' data-bs-target='#viewDetail'>Xem chi tiết</button></td>";

          for(j=1; j<=Object.keys(orderStatus).length; j++){
            var selectId = "selectStatus-"+key.toString();
            var select = document.getElementById(selectId);
            if(order.status === ("st"+j)){
              let newOption = new Option(orderStatus['st'+j],'st'+j);
              select.appendChild(newOption);
              newOption.setAttribute('selected',true);
            }
            else{
              let newOption = new Option(orderStatus['st'+j],'st'+j);
              select.add(newOption,undefined);    
            }
          }
        }
  }
}

function setDate(){
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = time+' '+date;

  return dateTime;
  //document.getElementById('dtNext').innerHTML = timeNext+'  '+date;
}

function setNext(){
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  var timeNext = (today.getHours()+1) + ":" + today.getMinutes()+" " +date;

  return timeNext;
}

function showOrderDetail(orderKey){
  for(i=0; i<localStorage.length; i++){
      var key = localStorage.key(i);
      if(key===orderKey){
          var order = JSON.parse(localStorage.getItem(key));
          for(j=0; j<order.orderedItems.length ; j++){
              var tr = document.createElement("tr");
              document.getElementById("tbodyViewOrder").append(tr);
  
              tr.innerHTML = "<td>"+order.orderedItems[j].name+"</td>" +
                              "<td>"+order.orderedItems[j].price+"</td>" +
                              "<td>"+order.orderedItems[j].quantity+"</td>";
          }
          var tr = document.createElement("tr");
          document.getElementById("tbodyViewOrder").append(tr);
          tr.innerHTML = "<td> Tổng tiền: "+order.total+"đ</td>";
      }
  }
}

function wreload(){
  location.reload();
}

function handleUpdateStatus(code){
  var select = document.getElementById('selectStatus-'+code);
  var value = select.options[select.selectedIndex].value;
  var od = JSON.parse(localStorage.getItem(code));
  var editedOrder ={
    orderedItems: od.orderedItems,
    total:od.total,
    status: value,
    user: od.user
  }
  localStorage.setItem(code,JSON.stringify(editedOrder));

  location.reload;
}