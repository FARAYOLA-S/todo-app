import React, { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    {openModal && <Modal setOpenModal={setOpenModal} /> }
    <div className="sticky top-0 w-full left-0 bg-inherit p-4 flex justify-between items-center border-b border-b-white">
      <h1 className=" text-5xl md:text-3xl select-none">TODO LIST</h1>
      <i onClick={ () => setOpenModal(true)} className="fa-solid fa-user text-3xl md:text-xl duration-300 hover:opacity-40 cursor-pointer" />
    </div>
    </>
  );
};

export default Header;
