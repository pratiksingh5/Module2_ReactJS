import Blog from "../components/Blog";

const data1 = {
    author : "Nishant",
    title: "How rapidly is the Indian startup ecosystem growing?",
    imgSrc: "https://images.pexels.com/photos/6953929/pexels-photo-6953929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const data2 = {
    author : "Meenakshi",
    title: "How to learn Full stack Development",
    imgSrc: "https://images.pexels.com/photos/4112283/pexels-photo-4112283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

const data3 = {
    author : "Hema",
    title: "How to setup GIt in windows",
    imgSrc: "https://images.pexels.com/photos/5052851/pexels-photo-5052851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
