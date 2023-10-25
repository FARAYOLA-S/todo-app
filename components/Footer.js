import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 py-3">
      <a href="#" target="_blank">
        <i className="fa-brands fa-instagram duration-300 hover:opacity-40 cursor-pointer" />
      </a>
      <a href="#" target="_blank">
        <i className="fa-brands fa-linkedin duration-300 hover:opacity-40 cursor-pointer" />
      </a>
      <a href="#" target="_blank">
        <i className="fa-brands fa-github duration-300 hover:opacity-40 cursor-pointer" />
      </a>
    </div>
  );
};
