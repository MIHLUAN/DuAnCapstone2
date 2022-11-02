var token_cybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
  (function getAllProductApi() {
    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
      // data: body
      headers: {
        TokenCybersoft: token_cybersoft,
      },
    });
    promise.then(function (res) {
      console.log(res.data.content);
      //Gọi hàm để tạo ui
      renderProductCard(res.data.content); // [{...},{...}]
    });
    promise.catch(function (err) {
      console.log(err);
    });
  })();
  
function renderProductCard(arrProduct) {
    var contentHTML = '';
    for(var i=0;i < arrProduct.length;i ++) {
        var product = arrProduct[i];
        contentHTML += `
        <div class="item ">
        <div class="img">
            <img src="${product.image}" alt="">
        </div>
        <h3 class="nameProduct">${product.name.length > 20 ? product.name.substr(0,20) + '...' : product.name}</h3>
        <p class="shortDesc">${product.shortDescription.length > 50 ? product.shortDescription.substr(0,50) + '...' : product.shortDescription}</p>
        <div class="footer_pro ">
            <div class="buyNow"><a href="#">Buy Now</a></div>
            <div class="price">85$</div>
        </div>
    </div>
        `;
    }

    document.querySelector('#product_item').innerHTML = contentHTML;

}