const ND_XuLiHD = 4.5;
const ND_DichVuCB = 20.5;
const ND_ThueKenhCC = 7.5;
const DN_XuLiHD = 15;
const DN_DichVuCB_10 = 75;
const DN_DichVuCB_sau10 = 5;
const DN_ThueKenhCC = 50;

function hienThi() {
    var kH = document.getElementById("selectKhachHang").value;
    if (kH == "2") {
        document.getElementById("inputSoKetNoi").style = "display:block";
    } else {
        document.getElementById("inputSoKetNoi").style = "display:none";
    }
}

function chonKH() {
    var kH = document.getElementById("selectKhachHang").value;

    if (kH == "1") {
        return "Nhà dân";
    } else if (kH == "2"){
        return "Doanh nghiệp";
    } else {
        alert("Chọn loại khách hàng đi");
    }
}
function tienDVDoanhNghiep(soKetNoi,giaKetNoi10,giaKetNoiTren10) {
    var tienDV = 0;
    if (0 < soKetNoi && soKetNoi <= 10) {
        tienDV = giaKetNoi10;
        console.log(soKetNoi);
    } else if (soKetNoi > 10) {
        tienDV = giaKetNoi10 + (soKetNoi - 10) * giaKetNoiTren10;
        console.log(soKetNoi);
    } else {
        console.log("vui lòng nhập lại số kết nối");
    }
    return tienDV;
}
function tienCap() {
    var khachHang = "";
    khachHang = chonKH();

    var maKH = document.getElementById("inputMaKH").value;
    var kenhCC = parseInt(document.getElementById("inputKenhCC").value);
    if (kenhCC < 0) {
        alert("số kênh cao cấp không hợp lệ");
        return 0;
    }
    var soKetNoi = parseInt(document.getElementById("inputKenhCC").value);

    var tienCap = 0;
    switch (khachHang) {
        case "Nhà dân":
            tienCap = ND_XuLiHD + ND_DichVuCB + kenhCC * ND_ThueKenhCC;
            break;
        case "Doanh nghiệp":
            var phiDVCB_DN = tienDVDoanhNghiep(soKetNoi, DN_DichVuCB_10, DN_DichVuCB_sau10);

            tienCap = DN_XuLiHD + phiDVCB_DN + kenhCC * DN_ThueKenhCC;
            break;
    }
    document.getElementById("txtBaoTien").innerHTML = "Mã khách hàng: " + maKH + " ; Tiền cáp: $" + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(tienCap);


}

document.getElementById("btnTinhTienCap").onclick = tienCap;

