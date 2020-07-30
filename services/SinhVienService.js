//File liên kết với BackEnd
var SinhVienService = function () {
  this.add = function (sinhVien) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/ThemSinhVien",
      method: "POST",
      data: sinhVien,
    });
  };
  this.delete = function (maSV) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/" + maSV,
      method: "DETELE",
    });
  };
  this.update = function (sinhVien) {};
  this.layDanhSachSinhVien = function () {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
      method: "GET",
    });
  };
  this.layThongTinSinhVien = function (maSV) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/" + maSV,
      method: "GET",
    });
  };
};
