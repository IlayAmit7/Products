
const products = [];

function addProduct() {

    event.preventDefault();
    
    const productTextBox = document.getElementById("productTextBox");
    const priceTextBox = document.getElementById("priceTextBox");
    const productSelectBox = document.getElementById("productSelectBox");
    const tableBody = document.getElementById("tableBody");
    const urlTextBox = document.getElementById("urlTextBox");
    const imageList = document.getElementById("imageList");
    

    const item = {
        product: productTextBox.value,
        price: +priceTextBox.value,
        select: productSelectBox.value,
        url: urlTextBox.value
        };

    products.push(item);


    let html = "";
    for(const item of products) {
        html += `
            <tr>
                <td>${item.product}</td>
                <td>${item.price}</td>
                <td>${item.select}</td>
                <td>
                      <img src="${item.url}">
                <td>

            </tr>
        `;
    }

    tableBody.innerHTML = html;

    productTextBox.value = "";
    priceTextBox.value = "";
    productSelectBox.value = "";
    urlTextBox.value = "";
  
}




   











