import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <section className="my-10 container mx-auto">
      <h1 className="text-3xl font-bold text-center underline">Our Posts</h1>
      <p className="text-xl font-bold pb-8">Total Posts: {posts.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
