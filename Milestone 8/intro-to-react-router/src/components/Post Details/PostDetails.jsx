import { useLoaderData, useNavigate, useParams } from "react-router-dom";
const PostDetails = () => {
  const { title, userId, body } = useLoaderData();
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  console.log(id);
  return (
    <div>
      <div className="card mx-8 bg-base-100 shadow-xl">
        <div className="card-body">
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
            <button onClick={handleGoBack} className="btn btn-primary">
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
