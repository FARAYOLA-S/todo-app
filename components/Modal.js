import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useAuth } from "../context/AuthContext";


const Modal = ({ setOpenModal }) => {
  const [_document, set_document] = useState(null);
  const { logout } = useAuth();
  useEffect(() => {
    set_document(document);
  }, []);
  if (!_document) {
    return null;
  }

  return ReactDom.createPortal(
    <div className=" fixed w-screen h-screen left-0 top-0 bg-white text-slate-800 flex flex-col">
      <div className=" flex justify-between items-center border-b border-slate-800 p-4">
        <h1 className="font-extrabold text-4xl md:text-3xl select-none ">
          MENU
        </h1>
        <i
          className="fa-solid fa-xmark cursor-pointer duration-300 hover:rotate-180 text-2xl md:text-lg "
          onClick={() => setOpenModal(false)}
        />
      </div>
      <div className=" flex flex-col p-4 gap-3  ">
        <h2
          onClick={() => {
            logout();
            setOpenModal(false);
          }}
          className="text-xl md:text-lg hover:pl-2 duration-300 select-none cursor-pointer"
        >
          Logout
        </h2>
      </div>
    </div>,
    _document.getElementById("portal")
  );
};

export default Modal;
