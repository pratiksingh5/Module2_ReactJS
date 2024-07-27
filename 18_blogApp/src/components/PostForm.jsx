import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import RTE from "@/components/RTE/RTE";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PostForm = ({type, post}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
        title: post ? post.title : "",
        slug: post ? post.slug : "",

    }
  });

  return (
    <div className="min-h-screen py-8">
      <h1 className="font-semibold text-xl md:text-3xl">{type} Blog</h1>
      <form className="bg-[#f0f0f0] text-slate-800 py-8 px-6 my-8 rounded-2xl flex flex-col gap-4">
        <Input
          className="h-12 bg-foreground"
          placeholder="Blog Title"
          type="text"
          {...register("title", {
            minLength: 4,
            maxLength: 40,
          })}
        />
        <Input
          className="h-12 bg-foreground"
          placeholder="Custom URL"
          type="text"
          required
          {...register("slug")}
        />
        <div className="flex w-full justify-between">
          <Input
            className="h-12 bg-foreground w-[48%] cursor-pointer"
            placeholder="Custom URL"
            type="file"
            required
            {...register("main-image")}
          />
          <Select className="bg-slate-50">
            <SelectTrigger className="w-[48%] h-12 bg-white">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <RTE/>
        <Button className="w-[200px] h-12"> Create</Button>
      </form>
    </div>
  );
};

export default PostForm;
