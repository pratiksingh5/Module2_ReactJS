import React from 'react'
import { Card } from '@/components';

const data = {
  id: "1",
  author : "John Doe",
  image: "https://images.unsplash.com/photo-1715449187020-e090eb0dc3d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  title: "How rapidly is the Indian startup ecosystem growing?"
}

const AllBlogs = () => {


  return (
    <div className='flex flex-wrap gap-12 py-10'>
      <Card author={data.author} image={data.image} title={data.title}  id={data.id}/>
      <Card author={data.author} image={data.image} title={data.title} id={data.id}/>
      <Card author={data.author} image={data.image} title={data.title} id={data.id}/>
      <Card author={data.author} image={data.image} title={data.title} id={data.id}/>
    </div>
  )
}

export default AllBlogs