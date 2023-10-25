import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const { login, signUp, currentUser } = useAuth();
 

  async function handleSubmit() {
    if (!email || !password) {
      setError("Please fill in both fields i.e. email and password");
    }
    if (isLogin) {
      try {
        await login(email, password);
      } catch (error) {
        setError("Incorrect password or email address");
      }
      return;
    }
    await signUp(email, password);
  }

  return (
    <div className="flex-1 text-sm  flex flex-col gap-4 justify-center items-center">
      <h1 className="font-extrabold text-4xl md:text-2xl select-none uppercase">
        {isLogin ? "Login" : "Register"}
      </h1>
      {error && (
        <div className="w-full max-w-[40ch] border border-rose-400 text-rose-300 p-2 text-center">
          {error}
        </div>
      )}
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address "
        className="outline-none text-slate-800 p-2 w-full duration-300 border-b-2 border-white focus:border-cyan-300 max-w-[40ch]"
      />

      <input
        type="password"
        name="password"
        placeholder="Password "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="outline-none text-slate-800 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-white focus:border-cyan-300"
      />
      <button
        className="w-full max-w-[40ch] border border-white py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-800"
        onClick={handleSubmit}
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsLogin(!isLogin)}
      >
        {!isLogin ? "Login" : "Register"}
      </h2>
    </div>
  );
};

export default Login;
