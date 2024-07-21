import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthService } from "../../appWrite/auth";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";


const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const auth = new AuthService();

  const handleLogin = async (data) => {
    try {
      console.log("data", data);
      const userData = await auth.login(data);
      if(userData){
        toast.success("Successfully logged In!");
        dispatch(login(userData))
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="login-wrapper flex  justify-center  text-background px-20 py-16 rounded-[30px] mt-10">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="w-[500px] flex flex-col gap-3 bg-[#F0F0F0] p-12 rounded-[30px]"
      >
        <div className="w-full flex flex-col gap-3">
          <h3 className="text-2xl font-semibold mb-4">Login</h3>
          <Input
            className="h-12 bg-foreground"
            placeholder="Email"
            type="email"
            required
            {...register("email")}
          />
          <Input
            className="h-12 bg-foreground"
            placeholder="Password"
            type="password"
            required
            {...register("password")}
          />
          <Button className="w-[200px] h-12"> Login</Button>
          <span
            className="text-primary font-semibold underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
