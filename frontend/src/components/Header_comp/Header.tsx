import React from "react";
import { Profile, Info, ProfilePhoto } from "./headerStyles";

const Header: React.FC = () => {
  return (
    <Profile>
      <Info>
        <p>
          hey,<b>Daniel</b>
        </p>
      </Info>
      <ProfilePhoto>
        <img src="https://i.ibb.co/nmH3KPs/prof1.jpg" alt="prof1" />
      </ProfilePhoto>
    </Profile>
  );
};

export default Header;
