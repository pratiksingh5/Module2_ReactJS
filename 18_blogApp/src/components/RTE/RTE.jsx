import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import config from "@/config";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, defaultValue = "" }) => {
  return (
    <>
      <Controller
        control={control}
        name={name || "content"}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={config.TINY_API_KEY}
            //   onInit={(_evt, editor) => editorRef.current = editor}
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </>
  );
};

export default RTE;
