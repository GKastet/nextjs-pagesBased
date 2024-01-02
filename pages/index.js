import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {  
  const router = useRouter() 

  return (
    <div>
      <h1>Next JS pre-rendering</h1>
      <Link href='/users'>UsersList</Link>
      <Link href='/posts'>Posts</Link>
    </div>
  );
};

export default Home;
