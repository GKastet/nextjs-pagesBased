import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");// creates a new route in history, able fetch data
    // router.replace("/product");//will replace the browser history, better for modal
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <button type="button" onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
};

// function Home(){
//     return (
//         <h1>Home</h1>
//         )
//     }

export default Home;
