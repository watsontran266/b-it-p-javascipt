document.getElementById("btn-tax").addEventListener("click", () => {
  let hoTen = document.getElementById("input-name2").value;
  let tongThuNhapNam = Number(document.getElementById("input-summoney").value);
  let soNguoiPhuThuoc = Number(document.getElementById("input-person").value);
  let result = document.getElementById("result-tax");

  if (
    hoTen === "" ||
    document.getElementById("input-summoney").value === "" ||
    document.getElementById("input-person").value === ""
  ) {
    result.innerText = "👉 Vui lòng nhập đầy đủ họ tên, thu nhập năm và số người phụ thuộc";
    return;
  }

  if (tongThuNhapNam < 0 || soNguoiPhuThuoc < 0) {
    result.innerText = "👉 Dữ liệu không hợp lệ";
    return;
  }

  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  let thueThuNhap = 0;

  if (thuNhapChiuThue <= 0) {
    thueThuNhap = 0;
  } else if (thuNhapChiuThue <= 60000000) {
    thueThuNhap = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thueThuNhap = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thueThuNhap = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thueThuNhap = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thueThuNhap = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thueThuNhap = thuNhapChiuThue * 0.3;
  } else {
    thueThuNhap = thuNhapChiuThue * 0.35;
  }

  result.innerText = `👉 Họ tên: ${hoTen}. Thuế thu nhập cá nhân phải trả: ${thueThuNhap.toLocaleString()} VND`;
});