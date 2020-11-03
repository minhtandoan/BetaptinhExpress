function kiemTraSoHang(_sohang) {
    var so = document.getElementById(_sohang).value;
    if (isNaN(so)) {
        if (_sohang == "so1") {
            var name = "Số thứ nhất";
        }

        if (_sohang == "so2") {
            var name = "Số thứ hai";
        }

        document.getElementById("thongbao").style.color = "red";
        document.getElementById("thongbao").textContent = "Giá trị nhập ở ô " + name + " không phải là số";
    }
    else {
        document.getElementById("thongbao").textContent = "";
    }
}


function kiemTra() {
    
    var pheptinh_obj = document.querySelector('input[name="pheptinh"]:checked');
    var so1 = parseFloat(document.getElementById("so1").value);
    var so2 = parseFloat(document.getElementById("so2").value);

    document.getElementById("ketqua").value="";

    if (pheptinh_obj == null) {
        document.getElementById("thongbao").style.color = "red";
        document.getElementById("thongbao").textContent = "Chưa chọn phép tính";
        return false;
    }

    if (isNaN(so1) || isNaN(so2)) {
        document.getElementById("thongbao").style.color = "red";
        document.getElementById("thongbao").textContent = "Số nhập vào không hợp lệ";
        return false;
    }
}