import React from "react";
import PostForm from "@/components/PostForm";

const post = {
  title: "Purana Post",
  slug: "puarana-post"
}

const EditBlog = () => {
  return <PostForm  type="Edit" post={post} />;
};

export default EditBlog;
