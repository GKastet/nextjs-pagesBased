import Link from "next/link";

function ProductList({productId = 100}) {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>
        <Link href="/product/1">Product 1</Link>
      </h1>
      <h1>
        <Link href="/product/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>Product 3</Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h1>
    </>
  );
}

export default ProductList;

//http://localhost:3000/product
// replace attribute will link to home page
