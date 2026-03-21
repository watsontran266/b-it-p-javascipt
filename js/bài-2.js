const tinhTienDien = (soKw) => {
  let tongTien = 0;

  if (soKw <= 50) {
    tongTien = soKw * 500;
  } 
  else if (soKw <= 100) {
    tongTien = 25000 + (soKw - 50) * 650;
  } 
  else if (soKw <= 200) {
    tongTien = 25000 + 32500 + (soKw - 100) * 850;
  } 
  else if (soKw <= 350) {
    tongTien = 25000 + 32500 + 85000 + (soKw - 200) * 1100;
  } 
  else {
    tongTien = 25000 + 32500 + 85000 + 165000 + (soKw - 350) * 1300;
  }

  return `Điện năng tiêu thụ ${soKw} kW -> tổng tiền: ${tongTien} VND`;
};

console.log(tinhTienDien(247));