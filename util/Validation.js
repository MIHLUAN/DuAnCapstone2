var validation = {
  kiemTraRong: function (value, errId, valName, name) {
    //Nếu không hợp lệ thì hàm này return về false ngược lại return về true
    if (value.trim() === "") {
      document.getElementById(errId).style.display = "block";
      document.getElementById(
        errId
      ).innerHTML = `${name} không được bỏ trống !`;
      document.getElementById(valName).style.color = "red";
      return false;
    }

    document.getElementById(errId).style.display = "none";
    document.getElementById(valName).style.color = "green";
    return true;
  },
  kiemTraKyTu: function (value, errId, valName, name) {
    var regexLetter =/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
    if (regexLetter.test(value)) {
      document.getElementById(errId).style.display = "none";
      document.getElementById(valName).style.color = "green";
      return true;
    }

    document.getElementById(errId).style.display = "block";
    document.getElementById(errId).innerHTML = `${name} phải là ký tự!`;
    document.getElementById(valName).style.color = "red";
    return false;
  },
  kiemTraEmail: function (value, errId, valName, name) {
    var regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
      document.getElementById(errId).style.display = "none";
      document.getElementById(valName).style.color = "green";
      return true;
    }
    document.getElementById(errId).style.display = "block";
    document.getElementById(errId).innerHTML = "email không hợp lệ!";
    document.getElementById(valName).style.color = "red";
    return false;
  },
  kiemTraSo: function (value, errId, valName, name) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
      document.getElementById(errId).style.display = "none";
      document.getElementById(valName).style.color = "green";
      return true;
    }
    document.getElementById(errId).style.display = "block";
    document.getElementById(errId).innerHTML = `${name} yêu cầu nhập số!`;
    document.getElementById(valName).style.color = "red";
    return false;
  },
  kiemTraGender: function ( tagRadioButton, errId) {
    var radios = document.getElementsByClassName(tagRadioButton);
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
      if (radios[i].checked) formValid = true;
      i++;
    }

    if (formValid) {
        document.getElementById(errId).style.display = "none";
        return true;
      
    }
   document.getElementById(errId).style.display = "block";
      document.getElementById(errId).innerHTML = `Phải chọn giới tính!`;
      return false;
  },
  kiemTraMatKhau: function (value, errId, valName, name) {
    var regexLetter = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regexLetter.test(value)) {
      document.getElementById(errId).style.display = "none";
      document.getElementById(valName).style.color = "green";
      return true;
    }

    document.getElementById(errId).style.display = "block";
    document.getElementById(errId).innerHTML = `Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái và một số`;
    document.getElementById(valName).style.color = "red";
    return false;
  }
};

// function kiemTraRong () {

// }
