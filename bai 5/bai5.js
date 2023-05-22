let products = [];
displayProduct(products);

function displayProduct() {
    let display = "<table>";
    for (let i = 0; i < products.length; i++) {
        productsParameter = products[i];
        display += "<tr>";
        display +="<td style='width: 10px'>"+eval(i+1)+"</td>"+ "<td style='width: 200px'>" + products[i] + "</td>" + "<td>" + "<button onclick='editProduct(productsParameter)'>Edit</button>" + "</td>" + "<td>" + "<button onclick='deleteProduct(productsParameter)'>Delete</button>" + "</td>";
        display += "</tr>";
    }
    display += "</table>"
    document.getElementById("ProductName").innerHTML = display;
}

function addProduct(arr) {
    let inputValue = document.getElementById("newProduct");
    console.log(arr);
    arr.push(inputValue.value);
    displayProduct(arr);
}

function editProduct(firstName){
    let newProductName = prompt('Nhập tên mới của sản phẩm');
    for (let i=0;i<products.length;i++)
        if (products[i]===firstName){
            products[i]=newProductName;
        }
    displayProduct();
}

function deleteProduct(productName){
    for (let i=0;i<products.length;i++)
        if (products[i]===productName){
            products.splice(i,1);
        }
    displayProduct();
}