function Blog({data}) {
  return (
    <div className="w-[370px] h-[350px] bg-white rounded-2xl p-4 flex flex-col gap-2">
        <img src={data.imgSrc} alt="" className="rounded-xl h-[230px] bg-yellow-300" />
        <span className="text-gray-400">{data.author}</span>
        <h4 className="text-black font-semibold">{data.title}</h4>
    </div>
  )
}

export default Blog