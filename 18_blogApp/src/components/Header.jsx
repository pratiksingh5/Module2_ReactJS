import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthService } from "../../appWrite/auth";
import { logout } from "@/store/authSlice";


const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  // const authStatus = useSelector((state) => console.log(state));
  const authStatus = true;
  const auth = new AuthService;
  const dispatch = useDispatch();
  // const authStatus = false;


  useEffect(() => {
  
  }, [authStatus])

  const navItems = [
    {
      name: "Home",
      route: "/",
      active: true,
    },
    {
      name: "Login",
      route: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      route: "/signup",
      active: !authStatus,
    },
    // {
    //   name: "All Post",
    //   route: "/all-post",
    //   active: authStatus,
    // },
    {
      name: "Add Blog",
      route: "/create-blog",
      active: authStatus,
    },
    {
      name: "Edit Blog",
      route: "/edit-blog",
      active: authStatus,
    },
  ];

  const handleLogout =  () => {
     auth.logout().then(() => {
      dispatch(logout());
      navigate('/login')
     })
  }

  return (
    <header className="flex justify-between items-center mt-8 h-20 bg-[#171717] px-8">
      <div className="logo">
        <svg
          width="132"
          height="42"
          viewBox="0 0 132 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.4597 33.1127L25.4242 29.935L25.1186 29.7394L21.1708 27.2461C22.6253 26.1583 23.7008 24.5694 24.1164 22.7361C24.2386 22.1739 24.3119 21.5994 24.3119 21.0005C24.3119 16.6983 20.8286 13.215 16.5264 13.215C12.2242 13.215 8.74083 16.6983 8.74083 21.0005C8.74083 25.3027 12.2242 28.7861 16.5264 28.7861C16.9297 28.7861 17.3208 28.7494 17.7119 28.7005L14.6564 23.7139L19.9975 27.075L20.7553 27.5516L25.0819 30.2772C23.7497 31.5116 22.1486 32.4528 20.3642 33.015C19.1542 33.3939 17.8708 33.6016 16.5386 33.6016C9.58417 33.6016 3.9375 27.955 3.9375 21.0005C3.9375 14.0461 9.58417 8.39941 16.5386 8.39941C23.4931 8.39941 29.1397 14.0461 29.1397 21.0005C29.1397 23.4816 28.4186 25.7916 27.1842 27.735L30.4597 33.1127ZM40.2375 17.5416V24.8383C40.2375 25.6083 40.0297 26.2194 39.6264 26.6716C39.2231 27.1116 38.6731 27.3439 37.9764 27.3439C37.2919 27.3439 36.7542 27.1239 36.3386 26.6716C35.9231 26.2316 35.7153 25.6205 35.7153 24.8383V17.5416H30.9853V25.4372C30.9853 27.2339 31.4375 28.6516 32.3542 29.6905C33.2708 30.7294 34.5175 31.255 36.0942 31.255C37.0108 31.255 37.8297 31.0594 38.5386 30.6805C39.2475 30.3016 39.8097 29.8005 40.2131 29.1894V31.1327H44.9919V17.5416H40.2375ZM49.3308 16.2827C50.0275 16.2827 50.6019 16.0505 51.0297 15.5983C51.4575 15.1461 51.6775 14.5716 51.6775 13.8994C51.6775 13.2027 51.4575 12.6161 51.0297 12.1639C50.6019 11.6994 50.0275 11.4672 49.3308 11.4672C48.6097 11.4672 48.0353 11.6994 47.6075 12.1639C47.1797 12.6283 46.9597 13.2027 46.9597 13.8994C46.9597 14.5839 47.1797 15.1461 47.6075 15.5983C48.0475 16.0627 48.6219 16.2827 49.3308 16.2827ZM46.9353 17.5416V31.1327H51.6897V17.5416H46.9353ZM53.6086 24.325C53.6086 25.7427 53.9019 26.9772 54.4764 28.0283C55.0631 29.0794 55.8697 29.8861 56.9086 30.4483C57.9475 31.0105 59.1453 31.2916 60.4775 31.2916C62.2008 31.2916 63.6553 30.815 64.8408 29.8616C66.0142 28.9083 66.7842 27.5883 67.1142 25.9139H62.0908C61.8219 26.8061 61.2475 27.2461 60.3919 27.2461C59.7931 27.2461 59.3164 27.0016 58.9742 26.5005C58.6319 25.9994 58.4486 25.2783 58.4486 24.325C58.4486 23.3716 58.6197 22.6505 58.9742 22.1616C59.3164 21.6727 59.7931 21.4283 60.3919 21.4283C61.2353 21.4283 61.7975 21.8683 62.0908 22.7605H67.1264C66.7842 21.0616 66.0264 19.7416 64.8531 18.8005C63.6797 17.8594 62.2253 17.3827 60.4897 17.3827C59.1453 17.3827 57.9597 17.6639 56.9208 18.2261C55.8819 18.7883 55.0631 19.595 54.4886 20.6461C53.9019 21.685 53.6086 22.9194 53.6086 24.325ZM83.4797 31.1327L78.0286 24.3739L83.382 17.5416H77.6864L73.9342 22.8705V13.2027H69.1797V31.1327H73.9342V25.5594L77.6864 31.1327H83.4797ZM101.116 13.5939H96.2764V23.4327L89.8353 13.5939H84.9953V30.9861H89.8353V21.2694L96.2764 30.9861H101.116V13.5939ZM117.861 30.9861L113.058 24.325L117.69 17.395H112.483L110.515 20.8172L108.071 17.395H102.742L107.472 23.9339L102.938 30.9861H108.144L110.088 27.5639L112.532 30.9861H117.861ZM125.634 13.8383V13.6183H120.855V13.8383V16.735H125.634V13.8383ZM126.746 26.9405C126.343 26.9405 126.05 26.855 125.891 26.6961C125.72 26.5372 125.634 26.2683 125.634 25.9016V21.3427H128.103V17.395H119.193V21.3427H120.868V25.8283C120.868 29.275 122.603 30.9861 126.074 30.9861H128.14V26.9405H126.746Z"
            fill="white"
          />
        </svg>
      </div>
      <nav>
        <ul className="flex gap-6 items-center">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name} className="cursor-pointer">
                <button onClick={() => navigate(item.route)}>
                  {" "}
                  {item.name}{" "}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li className="cursor-pointer" onClick={() => navigate("/login")}>
              <Button className="bg-transparent border border-primary" onClick = {handleLogout}>
                Logout
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
