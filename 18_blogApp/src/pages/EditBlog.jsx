import React, { useEffect, useState } from "react";
import PostForm from "@/components/PostForm";
import { useParams } from "react-router-dom";
import  BlogService from "@/appWrite/blogService";


const EditBlog = () => {
  const {slug} = useParams();
  const [post, setPost] = useState(null);
  const [imageName, setImageName] = useState(null);

  useEffect(() => {
    BlogService.getPost(slug).then((data) => {
      console.log("dataaaaa", data);

    BlogService.getFileName(data.mainImage).then((result) => {
      console.log("result", result);
      setImageName(result.name)
    })
      setPost(data)
    } )
  }, [])

  return post && <PostForm  type="Edit" post={post} imageName = {imageName} />;
};

export default EditBlog;
