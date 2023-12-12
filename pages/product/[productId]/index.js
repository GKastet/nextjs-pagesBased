import { useRouter } from "next/router";

function ProductDetail(){
    const router = useRouter()
    const productId = router.query.productId    
    return(
        <h1>Details about product {productId}</h1>
    )
}

export default ProductDetail;

//http://localhost:3000/product/5 
//http://localhost:3000/product/50 
//http://localhost:3000/product/sweater

//etc.