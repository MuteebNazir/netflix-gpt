import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg"
          alt="Background"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-2xl py-4"> Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        />
        <input type="text" placeholder="Password" className="p-2 my-2 w-full" />
        <button className="p-4 my-2 bg-red-700  w-full">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
