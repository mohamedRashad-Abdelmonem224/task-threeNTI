let product =require("../data/product");
function removeproduct(id){
    const index=product.findIndex((product)=>{
        return product.id===id;
    });
    if(index===-1){
       console.log(`invaild id ${id} not found`);
       return;
    }
    product.splice(index,1);
    console.log(`product with id ${id} removed successfully`);
}
module.exports=removeproduct;
