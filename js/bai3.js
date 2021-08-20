const thue60 = 0.05;
const thue60_120 = 0.1;
const thue120_210 = 0.15;
const thue210_384 = 0.2;
const thue384_624 = 0.25;
const thue624_960 = 0.3;
const thueTren960 = 0.35;

function tinhTNChiuThue(tongTN, soNgPT) {
    if (tongTN > 0 && tongTN > (4000000 + soNgPT * 1600000)) {
        var thuNhapCT = tongTN - (4000000 + soNgPT * 1600000);
        return thuNhapCT;
    } else {
        alert("số tiền thu nhập không hợp lệ");
        return 0;
    }
}
function tinhThue() {
    var name = document.getElementById("inputName1").value;
    var tongTN = parseInt(document.getElementById("inputMoney").value);
    var soNgPT = parseInt(document.getElementById("inputPeople").value);

    var thuNhapCT = tinhTNChiuThue(tongTN, soNgPT);
    if (thuNhapCT == 0) {
        return 0;
    }
    var tienThue = 0;

    if (tongTN <= 60000000) {
        tienThue = thuNhapCT * thue60;
    } else if (tongTN > 60000000 && tongTN <= 120000000) {
         tienThue = thuNhapCT * thue60_120;
    } else if (tongTN > 120000000 && tongTN <= 210000000) {
       tienThue = thuNhapCT * thue120_210;
    } else if (tongTN > 210000000 && tongTN <= 384000000) {
        tienThue = thuNhapCT * thue210_384;
    } else if (tongTN > 384000000 && tongTN <= 624000000) {
        tienThue = thuNhapCT * thue384_624;
    } else if (tongTN > 624000000 && tongTN <= 960000000) {
        tienThue = thuNhapCT * thue624_960;
    } else if (tongTN > 960000000) {
        tienThue = thuNhapCT * thueTren960;
    }

    document.getElementById("txtBaoThue").innerHTML = "Họ tên: " + name + " ; Tiền thuế thu nhập cá nhân: " + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 10 }).format(tienThue) + " VND"
}

document.getElementById("btnThue").onclick = tinhThue;