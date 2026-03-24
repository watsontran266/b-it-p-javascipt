document.getElementById("btn-result").addEventListener("click", function () {
  const diemChuan = Number(document.getElementById("input-point").value);
  const khuVuc = document.getElementById("area").value;
  const doiTuong = document.getElementById("type").value;
  const diemMon1 = Number(document.getElementById("input-numb1").value);
  const diemMon2 = Number(document.getElementById("input-numb2").value);
  const diemMon3 = Number(document.getElementById("input-numb3").value);

  let result = document.getElementById("result");

  let diemKhuVuc = 0;
  if (khuVuc === "A") {
    diemKhuVuc = 2;
  } else if (khuVuc === "B") {
    diemKhuVuc = 1;
  } else if (khuVuc === "C") {
    diemKhuVuc = 0.5;
  }

  let diemDoiTuong = 0;
  if (doiTuong === "1") {
    diemDoiTuong = 2.5;
  } else if (doiTuong === "2") {
    diemDoiTuong = 1.5;
  } else if (doiTuong === "3") {
    diemDoiTuong = 1;
  }

  if (diemChuan < 0 || diemChuan > 30){
        alert("Điểm chuẩn phải từ 0 đến 30")
        return
    }

  if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
    result.innerText = "👉 Bạn đã rớt. Do có môn nhỏ hơn hoặc bằng 0";
    return;
  }

  const tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

  if (tongDiem >= diemChuan) {
    result.innerText = `👉 Bạn đã đậu. Tổng điểm: ${tongDiem}`;
  } else {
    result.innerText = `👉 Bạn đã rớt. Tổng điểm: ${tongDiem}`;
  }
});


