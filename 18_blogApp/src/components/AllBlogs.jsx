import { useState, useEffect } from "react";
import { Card } from "@/components";
import BlogService from "@/appWrite/blogService";

const data = {
  id: "1",
  author: "John Doe",
  image:
    "https://images.unsplash.com/photo-1715449187020-e090eb0dc3d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  title: "How rapidly is the Indian startup ecosystem growing?",
};

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    console.log("Run Hua", blogs);
    if (!isDataFetched) {
      BlogService.getAllPost([]).then((data) => {
        setBlogs(data.documents);
        setIsDataFetched(true);
      });
    }
    // console.log("blogs", blogs)
  }, [blogs, isDataFetched]);

  // BlogService.getAllPost([]).then((data) => {
  //   if(data){
  //     setBlogs(data.documents);
  //   }
  // });

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
