document.getElementById("btn-money").addEventListener("click", () => {
  let hoTen = document.getElementById("input-name").value;
  let soKw = (document.getElementById("input-soKw").value);
  let result = document.getElementById("result-money");

  let tongTien = 0;

    if (hoTen === "" || soKw === "") {
    result.innerText = "👉 Vui lòng nhập đầy đủ họ tên và số kW";
    return;
  }

if (soKw < 0) {
  result.innerText = "👉 Số kW không hợp lệ";
    return;
  }
  if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 +
      50 * 650 +
      100 * 850 +
      150 * 1100 +
      (soKw - 350) * 1300;
  }

  result.innerText = `👉 Họ tên: ${hoTen}. Tiền điện: ${tongTien.toLocaleString()} VND`;
});