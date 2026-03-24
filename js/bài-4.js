document.getElementById("customer-type").addEventListener("change", () => {
  let loaiKhachHang = document.getElementById("customer-type").value;
  let connectGroup = document.getElementById("connect-group");
  let inputKetNoi = document.getElementById("input-connect");

  if (loaiKhachHang === "DoanhNghiep") {
    connectGroup.classList.remove("hidden");
  } else {
    connectGroup.classList.add("hidden");
    inputKetNoi.value = "";
  }
});

document.getElementById("btn-bill").addEventListener("click", () => {
  let loaiKhachHang = document.getElementById("customer-type").value;
  let maKhachHang = document.getElementById("input-clientid").value;
  let soKetNoi = Number(document.getElementById("input-connect").value);
  let soKenhCaoCap = Number(document.getElementById("input-channel").value);
  let result = document.getElementById("result-bill");

  if (
    loaiKhachHang === "" ||
    maKhachHang.trim() === "" ||
    document.getElementById("input-channel").value.trim() === ""
  ) {
    result.innerText =
      "👉 Vui lòng nhập đầy đủ loại khách hàng, mã khách hàng và số kênh cao cấp";
    return;
  }

  if (soKenhCaoCap < 0) {
    result.innerText = "👉 Số kênh cao cấp không hợp lệ";
    return;
  }

  let tongTien = 0;

  if (loaiKhachHang === "NhaDan") {
    tongTien = 4.5 + 20.5 + soKenhCaoCap * 7.5;
  }

  else if (loaiKhachHang === "DoanhNghiep") {
    if (document.getElementById("input-connect").value.trim() === "") {
      result.innerText = "👉 Doanh nghiệp phải nhập số kết nối";
      return;
    }

    if (soKetNoi < 0) {
      result.innerText = "👉 Số kết nối không hợp lệ";
      return;
    }

    if (soKetNoi <= 10) {
      tongTien = 15 + 75 + soKenhCaoCap * 50;
    } else {
      tongTien = 15 + 75 + (soKetNoi - 10) * 5 + soKenhCaoCap * 50;
    }
  }

  result.innerText = `👉 Mã khách hàng: ${maKhachHang}. Tiền cáp phải trả: ${tongTien} $`;
});