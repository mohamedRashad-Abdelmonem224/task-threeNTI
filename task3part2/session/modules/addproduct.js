const product = require("../data/product");

function addproduct(title) {
    if (!title) {
        console.log("title invalid");
        return;
    }

    const newId = product.length ? product[product.length - 1].id + 1 : 1;
    const newproduct = { id: newId, title, status: "active" };
    product.push(newproduct);
    console.log(`product added ${newproduct.title} successfully`);
}

module.exports = addproduct;