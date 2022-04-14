import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="container py-3">
      <small>Copyright &copy; {year} </small>
    </footer>
  );
};

export default Footer;
