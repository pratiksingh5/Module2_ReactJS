import Blog from "../components/Blog";

const data1 = {
    author : "Nishant",
    title: "How rapidly is the Indian startup ecosystem growing?"
}

const data2 = {
    author : "Meenakshi",
    title: "How to learn Full stack Development"
}

const data3 = {
    author : "Hema",
    title: "How to setup GIt in windows"
}

function Blogs() {
  return (
    <section className="h-screen bg-black text-white p-24">
      <h1 className="text-center text-6xl font-semibold">Our Blogs</h1>
      <div className="flex px-20 mt-16 gap-7">
        <Blog data = {data1} />
        <Blog data = {data2} />
        <Blog data = {data3} />
      </div>
    </section>
  );
}

export default Blogs;
