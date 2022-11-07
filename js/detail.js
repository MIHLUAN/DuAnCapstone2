//Viết hàm call api
var token_cybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";

(function getProductDetail() {
  //Lấy tham số từ url
  var urlParams = new URLSearchParams(window.location.search); //string => object
  var maProduct = urlParams.get("maproduct");
  console.log(maProduct);

  //gọi api
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${maProduct}`,
    method: "GET",
    ResponseType: "JSON",
    headers: {
      TokenCybersoft: token_cybersoft,
    },
  });
  promise.then(function (res) {
    console.log(res.data.content);
    var product = res.data.content;
    document.querySelector("#img-product").src = product.image;
    document.querySelector("#name-product").innerHTML = product.name;
    document.querySelector("#desc-product").innerHTML = product.description;
    var arrSize =product.size;
    var content =``;
    for (var element of arrSize){
        content+=`<button>${element}</button>`
    }
    document.querySelector("#size").innerHTML=content;
    document.querySelector("#price-product").innerHTML = product.price +`$`;
  });
  promise.catch(function (err) {
    console.log(err);
  });

  //V8 engine (biên dịch js)
})();
