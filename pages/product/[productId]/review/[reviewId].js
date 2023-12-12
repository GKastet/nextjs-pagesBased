import { useRouter } from "next/router";

function Review (){
    const router = useRouter()
    console.log('router: ', router.query);
    const {productId, reviewId} = router.query
    return(
        <h1>
            Review {reviewId} for product {productId}
        </h1>

    )
}

export default Review

//http://localhost:3000/product/5/review/5
//http://localhost:3000/product/3/review/5
//http://localhost:3000/product/5/review/3
//http://localhost:3000/product/sweater/review/3

//etc.
