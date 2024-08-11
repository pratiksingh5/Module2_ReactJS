import { useEffect } from "react";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthService } from "./appWrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";

const App = () => {
  const authService = new AuthService();
  const dispatch = useDispatch()

  useEffect(() => {
   authService.getCurrentUser()
   .then((userData) => {
    console.log("userd", userData);
    if(userData){
      dispatch(login(userData))
    }
    else{
      dispatch(logout())
    }
   })
  }, [])

  return (
    <div className="w-full max-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
