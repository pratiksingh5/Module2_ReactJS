import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogService from "@/appWrite/blogService";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Card = ({ author, image, title, id }) => {
  const [imgLink, setImgLink] = useState("");

  useEffect(() => {
    BlogService.getFilePreview(image).then((img) => {
      console.log("img", img);
      setImgLink(img);
    });
  }, []);

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
          src={imgLink}
          className="h-full w-full object-cover"
          alt="blog-feature-img"
        />
      </div>
      <div className="card-content mt-6 flex flex-col gap-2">
        <span className="opacity-70 text-sm">{author}</span>
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">{title}</h2>

          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                {" "}
                <span style={{backgroundColor: "red"}} onClick={(e) => {
                   e.stopPropagation();
                   navigate(`/edit-blog/${id}`)
                }}>Edit</span>{" "}
              </DropdownMenuItem>
              <DropdownMenuItem>
              {" "}
                <span onClick={(e) => {
                   e.stopPropagation();
                  //  navigate("/edit-blog")
                }}>Delete</span>{" "}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Card;
