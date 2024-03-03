function Blog({data}) {
  return (
    <div className="w-[370px] h-[350px] bg-white rounded-2xl p-4 flex flex-col gap-2">
        <img src="https://images.pexels.com/photos/6953929/pexels-photo-6953929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="rounded-xl"  />
        <span className="text-gray-400">{data.author}</span>
        <h4 className="text-black font-semibold">{data.title}</h4>
    </div>
  )
}

export default Blog