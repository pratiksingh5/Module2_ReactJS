import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full max-container">
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
