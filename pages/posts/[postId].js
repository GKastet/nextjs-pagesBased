//dynamic component

function Post({post}) {
    return (
        <>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
        </>
    )
}

export default Post;

export async function getStaticProps(context) {
  //parameter free named
  console.log("context: ", context);
  const { params } = context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await responce.json();
  return {
    props:{
        post: data
    }
  }
}
