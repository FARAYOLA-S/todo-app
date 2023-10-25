import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export const UserDashboard = () => {
  const { userInfo } = useAuth();
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length === 0) {
      setAddTodo(true);
    }
  }, [userInfo]);

  return (
    <div className="w-full max-w-[65ch] mx-auto flex flex-col gap-5 md:gap-3 text-sm md:text-xs">
      {addTodo && (
        <div className="flex items-stretch ">
          <input
            type="text"
            name="todo"
            placeholder="Enter your todo "
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="outline-none p-2 text-lg md:text-base text-slate-800 flex-1"
          />
          <button className="w-fit px-6 md:px-4 py-3 md:py-2 bg-amber-400  text-white font-medium text-base duration-300 hover:opacity-40 ">
            ADD
          </button>
        </div>
      )}

      {userInfo && <>Hi kenny</>}
      {!addTodo && (
        <button
          onClick={() => setAddTodo(true)}
          className=" border border-cyan-300 text-cyan-300 text-center text-lg duration-300 hover:opacity-30 uppercase py-2"
        >
          add todo
        </button>
      )}
    </div>
  );
};
