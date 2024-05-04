var orStatus={
    st1:"Chưa xử lý",
    st2:"Đang chuẩn bị",
    st3:"Đang vận chuyển",
    st4:"Đã giao",
}

var size = Object.keys(orStatus).length;
function addStatus(){
    for(i=1;i<=size; i++){
        localStorage.setItem('st'+i,JSON.stringify(orStatus['st'+i]));
    }
}