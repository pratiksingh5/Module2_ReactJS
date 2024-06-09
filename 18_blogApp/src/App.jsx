import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full ">
      <Header/>
       <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;
