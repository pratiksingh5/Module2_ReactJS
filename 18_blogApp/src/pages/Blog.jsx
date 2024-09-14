import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogService  from "@/appWrite/blogService";

const Blog = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {

    const getPostData = async () => {
      const response = await BlogService.getPost(slug); 
      console.log(response);
      setBlogData(response)
    }

    getPostData()

  }, [])
  // console.log("slug", slug);

  return (
    <div className="blog-wrapper w-full py-10">
      <div className="main-image-wrapper h-[464px] w-full rounded-[30px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1715449187020-e090eb0dc3d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
          alt="main-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="blog-content flex flex-col gap-8 py-16 px-36">
        <h1 className="text-3xl font-bold">
          {blogData?.title}
        </h1>
        <div className="blog-body">
          {blogData?.content}
        </div>
      </div>
    </div>
  );
};

export default Blog;
