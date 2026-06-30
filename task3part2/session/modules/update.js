const products = require("../data/product");

function updateproduct(id, title, status) {
    const item = products.find((p) => p.id === id);
    if (!item) {
        console.log(`product with id ${id} not found`);
        return;
    }
    if (title) item.title = title;
    if (status) item.status = status;
    console.log(`product with id ${id} updated successfully`);
}

module.exports = updateproduct;