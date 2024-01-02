//dynamic component

function Post({ post }) {
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    // ],
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //parameter context is free named
  console.log("context: ", context);
  const { params } = context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await responce.json();
  return {
    props: {
      post: data,
    },
  };
}
