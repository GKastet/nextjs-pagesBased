import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {

  // console.log("home");

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
