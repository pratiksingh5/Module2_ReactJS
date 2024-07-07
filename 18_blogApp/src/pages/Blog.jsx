import React from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

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
          Meta has collaborated with the Ministry Of Electronics And Information
          Technology to surface web3-based startups.
        </h1>
        <div className="blog-body">
          <p>
            Sociis natoque penatibus et magnis dis parturient montes. Ridiculus
            mus mauris vitae ultricies leo. Neque egestas congue quisque egestas
            diam. Risus in hendrerit gravida rutrum quisque. Viverra mauris in
            aliquam sem. At risus viverra adipiscing at in tellus. Sociis
            natoque penatibus et magnis dis parturient montes. Ridiculus mus
            mauris vitae ultricies leo. Neque egestas congue quisque egestas
            diam. Risus in hendrerit gravida rutrum quisque non.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
