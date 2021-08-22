// bảng giá tiền điện
const giaKw50Dau = 500;
const giaKw50_100 = 650;
const giaKw100_200 = 850;
const giaKw200_350 = 1100;
const giaKwTren350 = 1300;


function tinhTienDien(soKw,giaKw50Dau,giaKw50_100,giaKw100_200,giaKw200_350,giaKwTren350) {
    var tienDien = 0;
    if (0 < soKw && soKw <= 50) {
        tienDien = soKw * giaKw50Dau;

    } else if (50 < soKw  && soKw <= 100) {
        tienDien = 50 * giaKw50Dau + (soKw -50) * giaKw50_100;

    } else if (100 < soKw  && soKw <= 200) {
        tienDien = 50 * giaKw50Dau + 50 * giaKw50_100 + (soKw - 100) * giaKw100_200;

    } else if (200 < soKw  && soKw <= 350) {
        tienDien = 50 * giaKw50Dau + 50 * giaKw50_100 + 100 * giaKw100_200 + (soKw - 200) * giaKw200_350;

    } else if (soKw > 350) {
        tienDien = 50 * giaKw50Dau + 50 * giaKw50_100 + 100 * giaKw100_200 + 150 * giaKw200_350 + (soKw - 350) * giaKwTren350;

    } else {
        alert("vui lòng nhập lại số Kw");
    }
    return tienDien;
}

function tinhTien() {
    var name = document.getElementById("inputName").value;
    var soKw = parseInt(document.getElementById("inputKW").value);
    var tienDien = tinhTienDien(soKw, giaKw50Dau, giaKw50_100, giaKw100_200, giaKw200_350, giaKwTren350);
    document.getElementById("txtNoti").innerHTML = "Họ tên: " + name + ". Tiền điện: " + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 10 }).format(tienDien);
}
document.getElementById("btnTinh").onclick = tinhTien;