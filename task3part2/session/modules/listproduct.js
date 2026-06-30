const product = require("../data/product");
function listproduct() {
    console.log(" product");
    if (!product.length) {
        console.log("no product found");
        return;
    }
    tasks.forEach((product) => {
        console.log(`id:${product.id} title:${product.title} status:${product.status}`);
    });
}
module.exports = listproduct;
