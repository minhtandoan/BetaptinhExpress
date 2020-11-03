var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});

router.post('/', (req, res) => {
  var so1;
  var so2;
  var ketqua = "";
  var thongbao = "";
  var color="black";
  so1 = parseFloat(req.body.so1);
  so2 = parseFloat(req.body.so2);
  const pheptinh = req.body.pheptinh;
  var congRad="";
  var truRad="";
  var nhanRad ="";
  var chiaRad="";
  

  thongbao = "Đã tính ra kết quả";
  color = "green";

  switch (pheptinh) {
    case "cong":
      ketqua = cong(so1, so2);
      congRad="checked";
      break;

    case "tru":
      ketqua = tru(so1, so2);
      truRad="checked";
      break;

    case "nhan":
      ketqua = nhan(so1, so2);
      nhanRad="checked";
      break;

    case "chia":
      if (so2 != 0) {
        ketqua = chia(so1, so2);
      }
      else {
        thongbao = "Không được chia cho 0";
        color = "red";
        ketqua = "error";
      }
      chiaRad="checked";
      break;
    
  }

  res.render('index', { title: 'Bé tập tính', so1, so2, congRad, truRad, nhanRad, chiaRad, ketqua, thongbao, color });
});

module.exports = router;


function cong(so1, so2) {
  return so1 + so2;
}

function tru(so1, so2) {
  return so1 - so2;
}

function nhan(so1, so2) {
  return so1 * so2;
}

function chia(so1, so2) {
  return so1 / so2;
}


