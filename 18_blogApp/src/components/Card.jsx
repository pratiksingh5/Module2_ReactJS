import { useNavigate } from "react-router-dom";

const Card = ({ author, image, title, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="h-[354px] w-[370px] border border-[#ffffff2c] rounded-2xl p-4 cursor-pointer"
      onClick={() => {
        navigate(`/blog/${id}`);
      }}
    >
      <div className="img-wrapper rounded-2xl h-[200px] overflow-hidden">
        <img
          src={image}
          className="h-full w-full object-cover"
          alt="blog-feature-img"
        />
      </div>
      <div className="card-content mt-6 flex flex-col gap-2">
        <span className="opacity-70 text-sm">{author}</span>
        <h2 className="font-semibold text-xl">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
