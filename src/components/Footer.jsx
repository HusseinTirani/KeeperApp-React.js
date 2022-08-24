import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Hussein Tirani</p>
    </footer>
  );
}

export default Footer;
