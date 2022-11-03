var token_cybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
  document.querySelector('#btnSubmit').onclick = function () {
    //Lấy dữ liệu người dùng nhập từ giao diện 
    
    var user = new Register();
    user.email = document.querySelector('#txtEmail').value;
    user.password = document.querySelector('#password').value;
    user.name = document.querySelector('#txtName').value;
    user.phone = document.querySelector('#numberPhone').value;

    var passwordComfirm=document.querySelector('#passwordComfirm').value;
    // console.log(user);
    function checkEmail(){  
        var valid = true;
        if(validation.kiemTraRong(user.email,'err-email','validationEmail', 'Email'))
            valid=validation.kiemTraEmail(user.email, 'err-email','validationEmail', 'email');
        return valid;
    }
    function checkPassword(){
        var valid = true;
        if(validation.kiemTraRong(user.password, 'err-password','validationPassword', 'Password') )
            valid=validation.kiemTraMatKhau(user.password, 'err-password','validationPassword', 'Password')
        return valid;    
    }
    function checkPasswordComfirm(){
        var valid = true;
        if(validation.kiemTraRong(passwordComfirm, 'err-passwordComfirm','validationPasswordComfirm', 'PasswordComfirm'))
            {
               
                    if (user.password === passwordComfirm) {
                        document.getElementById("err-passwordComfirm").style.display = "none";
                        document.getElementById("validationPasswordComfirm").style.color = "green";
                        return true;
                    }
                    else {
                        document.getElementById("err-passwordComfirm").style.display = "block";
                        document.getElementById("err-passwordComfirm").innerHTML = `Phải trùng với Password`;
                        document.getElementById("validationPasswordComfirm").style.color = "red";
                    }
                return false;
            }
    }
    function checkName(){
        var valid = true;
        if(validation.kiemTraRong( user.name, 'err-name','validationName', 'Name'))
            valid=validation.kiemTraKyTu(user.name, 'err-name','validationName', 'Name');
        return valid;    
    }
    function checkPhone(){
        var valid = true;
        if(validation.kiemTraRong(user.phone,'err-numberPhone','validationPhone','Phone'))
            valid=validation.kiemTraSo(user.phone,'err-numberPhone','validationPhone','Phone');
        return valid;    
    }
    
    // var valid = true;
    // valid = validation.kiemTraRong(user.email,'err-email','validationEmail', 'Email') 
    // & validation.kiemTraRong(user.password, 'err-password','validationPassword', 'Password') 
    // & validation.kiemTraRong(passwordComfirm, 'err-passwordComfirm','validationPasswordComfirm', 'PasswordComfirm') 
    // & validation.kiemTraRong( user.name, 'err-name','validationName', 'Name')
    // & validation.kiemTraRong(user.phone,'err-numberPhone','validationPhone','Phone')
    // & validation.kiemTraGender('form-check-input','err-gender');
     
    // //Gọi ajax gửi về api backend
    // valid &=validation.kiemTraMatKhau(passwordComfirm, 'err-passwordComfirm','validationPasswordComfirm', 'PasswordComfirm')
    //     valid &=validation.kiemTraMatKhau(user.password, 'err-password','validationPassword', 'Password')
    //         //Kiểm tra ký tự
    //      valid &= validation.kiemTraKyTu(user.name, 'err-name','validationName', 'Name');
    //     //kiểm tra email
    //     valid &= validation.kiemTraEmail(user.email, 'err-email','validationEmail', 'email');
    //      //Kiểm tra tất cả là số;
    //     valid &= validation.kiemTraSo(user.phone,'err-numberPhone','validationPhone','Phone');
    
    // if (!valid) {
    //     return;
    // }

    if(checkEmail()&checkPassword()&checkPasswordComfirm()&checkName()&checkPhone()& validation.kiemTraGender('form-check-input','err-gender')){
      
    user.gender = document.querySelector('.form-check-input[type="radio"]:checked').value; 
    console.log(user);
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        ResponseType: 'JSON',
        headers: {
            TokenCybersoft: token_cybersoft,
          },
        data: user
    });

    //Thành công
    promise.then(function (res) {
        console.log(res.data);
        alert(res.data.message );
        
        window.location="../index.html";

        //cách 1: reload lại trang window.location.reload
        //cách 2: gọi lại api lấy danh sách sinh viên
       
    });
    promise.catch(function (err) {
        console.log(err);
    })
    }
    else return;
   
    

}