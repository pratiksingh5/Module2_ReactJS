import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogService  from "@/appWrite/blogService";
import parse from 'html-react-parser';

const Blog = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [imgLink, setImgLink] = useState("");

  useEffect(() => {

    const getPostData = async () => {
      const response = await BlogService.getPost(slug); 
      console.log(response);
       const img = await BlogService.getFilePreview(response?.mainImage)
      setImgLink(img);
      setBlogData(response)
    }
    getPostData()

  }, []);



  return blogData ? (
    <div className="blog-wrapper w-full py-10">
    <div className="main-image-wrapper h-[464px] w-full rounded-[30px] overflow-hidden">
      <img
        src={imgLink}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="blog-content flex flex-col gap-8 py-16 px-36">
      <h1 className="text-3xl font-bold">
        {blogData?.title}
      </h1>
      <div className="blog-body">
         { parse(blogData?.content)}
      </div>
    </div>
  </div>
  )
  : "No Data"
};

export default Blog;
