import { useState, useEffect } from "react";
import { Card } from "@/components";
import BlogService from "@/appWrite/blogService";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    console.log("Run Hua", blogs);
    if (!isDataFetched) {
      BlogService.getAllPost([]).then((data) => {
        setBlogs(data.documents);
        console.log("data.documents", data.documents)
        setIsDataFetched(true);
      });
    }
    // console.log("blogs", blogs)
  }, [blogs, isDataFetched]);

  return (
    <div className="flex flex-wrap gap-12 py-10">
      {blogs.length > 0
        ? blogs.map((blog) => {
            return (
              <Card
                author={blog.userId}
                image={blog.mainImage}
                title={blog.title}
                id={blog.$id}
              />
            );
          })
        : "No Blogs Present"}
    </div>
  );
};

export default AllBlogs;
