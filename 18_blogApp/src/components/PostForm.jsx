import React, { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import RTE from "@/components/RTE/RTE";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { service } from "@/appWrite/blogService"; // const se export
import BlogService from "@/appWrite/blogService"; // default se export

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PostForm = ({ type, post }) => {
  // who is logged in or getting userInfo

  const navigate = useNavigate()
  const userData = useSelector((state) => state.userData);
  console.log(userData)

  const { register, handleSubmit, watch, setValue, control } = useForm({
    defaultValues: {
      title: post ? post.title : "",
      slug: post ? post.slug : "",
      content: post ? post.content : "",
      status: post ? post.status : "active",
    },
  });

  //convert title to custom URL

  // const name = "  Java Script   ";
  // const newName = name.trim()
  // Java Script

  // regex for removing spaces within the text

  // .replace(/\s+/g, '')
  // JavaScript

  // const generateUrl = (title) => {
  //   console.log("function call");
  //   return title
  //     .toLowerCase() // Convert to lowercase
  //     .replace(/[^\w\s-]/g, "") // Remove all non-alphanumeric characters except hyphens and spaces
  //     .trim() // Trim leading and trailing whitespace
  //     .replace(/\s+/g, "-") // Replace spaces with hyphens
  //     .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
  // };

  const generateUrl = useCallback((title) => {
    if (title && typeof title === "string") {
      console.log("function call");
      return title
        .toLowerCase() // Convert to lowercase
        .replace(/[^\w\s-]/g, "") // Remove all non-alphanumeric characters except hyphens and spaces
        .trim() // Trim leading and trailing whitespace
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-"); // Replace multiple hyphens with a single hyphen
    }
    return "";
  }, []);

  useEffect(() => {
    //  console.log("Hello");
    const monitor = watch((value, data) => {
      //  console.log("value", value)
      //  console.log("data", data)
      if (data.name === "title") {
        // console.log("User enters on title")
        setValue("slug", generateUrl(value.title), { shouldValidate: true });
      }
    });

    return () => monitor.unsubscribe();
  }, [watch]);
  // const blogTitle = "How to use Redux";
  // const customUrl = generateUrl(blogTitle);

  // console.log(customUrl); // Output: "how-to-use-redux"

  const submit = async (data) => {
    console.log("data", data);
    console.log("userData")
    if (type === "Create") {
      // Create Post API Calls
      try {
        // createPost
        const file = await BlogService.uploadFile(data.mainImage[0])
        // console.log("file uploaded", file)
        if(file) {
          const fileId = file.$id;
          data.mainImage = fileId;

          const dbPostCreate = await BlogService.createPost({...data, userId: userData.$id});

          if(dbPostCreate){
            navigate("/")
          }
        }
      } catch (err) {
        console.log(err)
        toast.error("Failed to Create Post");
      }
    } else if (type === "Edit") {
      // Update Post API calls

      try{
         if(post){
          const file = data.mainImage[0] ? await BlogService.uploadFile(data.mainImage[0]) : null;

          if(file){
            BlogService.deleteFile(post.$id)
          }

          const dbPostUpdate = await BlogService.updatePost(post.$id,  {...data, mainImage: file ? file.$id: undefined})

          if(dbPostUpdate){
            navigate("/")
          }
         }
      }
      catch(err){
        toast.error("Failed to Edit Post");
      }
    }
  };

  return (
    <div className="min-h-screen py-8">
      <h1 className="font-semibold text-xl md:text-3xl">{type} Blog</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-[#f0f0f0] text-slate-800 py-8 px-6 my-8 rounded-2xl flex flex-col gap-4"
      >
        <Input
          className="h-12 bg-foreground"
          placeholder="Blog Title"
          type="text"
          {...register("title", {
            minLength: 4,
            maxLength: 40,
            required: true,
          })}
        />
        <Input
          className="h-12 bg-foreground"
          placeholder="Custom URL"
          type="text"
          {...register("slug", {
            required: true,
          })}
        />
        <div className="flex w-full justify-between">
          <Input
            className="h-12 bg-foreground w-[48%] cursor-pointer"
            placeholder="Custom URL"
            type="file"
            required
            accept="image/png, image/jpg, image/jpeg"
            {...register("mainImage")}
          />
          <Select className="bg-slate-50" {...register("status")}>
            <SelectTrigger className="w-[48%] h-12 bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <RTE name="content" control={control} defaultValue="" />
        <Button type="submit" className="w-[200px] h-12">
          {type === "Create" ? "Create" : "Update"}{" "}
        </Button>
      </form>
    </div>
  );
};

export default PostForm;
