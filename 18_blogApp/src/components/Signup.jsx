import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { AuthService } from "appWrite/auth";
import { AuthService } from "../appWrite/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const auth = new AuthService();

  const createAccount = async (data) => {
    try {
      // console.log("Hello", data);
      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const userData = await auth.createAccount(body);
      if (userData) {
        toast.success("Successfully Account created!");
        console.log("userData", userData);
        dispatch(login(userData))
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="login-wrapper flex  justify-center text-background px-20  rounded-[30px] mt-10">
      <form
        onSubmit={handleSubmit(createAccount)}
        className="w-[500px] flex flex-col gap-3 bg-[#F0F0F0] p-12 rounded-[30px]"
      >
        <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
        <Input
          className="h-12 bg-foreground"
          placeholder="Name"
          type="text"
          {...register("name")}
          required
        />
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
        <Input
          className="h-12 bg-foreground"
          placeholder="Confirm Password"
          type="password"
          required
          {...register("confirmpassword")}
        />
        <Button className="w-[200px] h-12"> Sign Up</Button>
        <span
          className="text-primary font-semibold underline cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </form>
    </div>
  );
};

export default Signup;
