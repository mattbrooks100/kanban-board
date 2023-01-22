import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex fixed bottom-0 w-full p-1 bg-zinc-900 text-white items-center justify-center">
      Copyright &copy; {date.getFullYear()} Matthew Brooks
    </footer>
  );
};

export default Footer;
