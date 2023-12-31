import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();

  return {
    // props: {
    //   posts: data.slice(0, 3), //returns 100 posts, i want only first 3
    // },
    props: {
        posts: data, //returns 100 posts
      },
  };
}
