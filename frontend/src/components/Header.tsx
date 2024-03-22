import React from "react";
import "./styles/header.css";

const Header: React.FC = () => {
  return (
    <div className="profile">
      <div className="info">
        <p>
          hey,<b>Daniel</b>
        </p>
      </div>
      <div className="profile-photo">
        <img src="https://i.ibb.co/nmH3KPs/prof1.jpg" alt="prof1" />
      </div>
    </div>
  );
};

export default Header;
