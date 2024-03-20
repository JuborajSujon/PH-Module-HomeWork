import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { userId, id, title, body } = post;
  return (
    <section>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://picsum.photos/200"
            alt="Random Images"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>user Id: {userId}</p>
          <p>{body}</p>
          <div className="card-actions">
            <Link to={`/posts/${id}`} className="btn btn-primary">
              Read more
            </Link>
          </div>

          <div className="divider">OR Use Modal</div>

          <button
            className="btn"
            onClick={() => document.getElementById("post_modal").showModal()}>
            Read more
          </button>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="post_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="space-y-4">
            <div className="flex justify-center">
              <img
                src="https://picsum.photos/200"
                alt="Random Images"
                className="rounded-xl"
              />
            </div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="font-semibold">user Id: {userId}</p>
            <p className="">{body}</p>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Post;
