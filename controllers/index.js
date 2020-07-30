var svService = new SinhVienService();

const renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();
  var table = document.getElementById("tblSinhVien");
  var str = "";
  promise
    .then(function (res) {
      for (i = 0; i < res.data.length; i++) {
        str += `
              <tr>
                <td>${res.data[i].MaSV}</td>
                <td>${res.data[i].HoTen}</td>
                <td>${res.data[i].Email}</td>
                <td>${res.data[i].SoDT}</td>
                <td>${res.data[i].DiemToan}</td>
                <td>${res.data[i].DiemLy}</td>
                <td>${res.data[i].DiemHoa}</td>
                <td>
                  <button onclick='deteleSinhVien("${res.data[i].MaSV}")' class="btn btn-danger">Xoá</button>
                </td>
              </tr>
        `;
      }
      table.innerHTML = str;
    })
    .catch(function (err) {
      console.log(err);
    });
};

const addSinhVien = function () {
  var maSV = document.getElementById("MaSV").value;
  var hoTen = document.getElementById("HoTen").value;
  var email = document.getElementById("Email").value;
  var soDT = document.getElementById("SoDT").value;
  var CMND = "CMND";
  var diemToan = document.getElementById("DiemToan").value;
  var diemLy = document.getElementById("DiemLy").value;
  var diemHoa = document.getElementById("DiemHoa").value;

  const newSV = new SinhVien(
    maSV,
    hoTen,
    email,
    soDT,
    CMND,
    diemToan,
    diemLy,
    diemHoa
  );

  svService
    .add(newSV)
    .then(function (res) {
      renderSinhVien();
    })
    .catch(function (err) {
      console.log(err);
    });
};

const deteleSinhVien = function (maSV) {
  svService
    .delete(maSV)
    .then(function (res) {
      console.log("data:", res.data);
      renderSinhVien();
    })
    .catch(function (err) {
      console.log(err);
    });
};

renderSinhVien();

var test = function () {
  console.log("asdasd");
};
