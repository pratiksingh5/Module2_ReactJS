import React, { useEffect, useState } from "react";
import PostForm from "@/components/PostForm";
import { useParams } from "react-router-dom";
import  BlogService from "@/appWrite/blogService";

const post = {
  title: "Purana Post",
  slug: "puarana-post"
}

const EditBlog = () => {
  const {slug} = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    BlogService.getPost(slug).then((data) => {
      console.log("dataaaaa", data)
      setPost(data)
    } )
  }, [])

  return post && <PostForm  type="Edit" post={post} />;
};

export default EditBlog;
