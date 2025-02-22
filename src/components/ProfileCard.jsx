import React from "react";
import "./ProfileCard.css";
import { useState } from "react";
import ReactSwitch from "react-switch";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
const ProfileCard = (user) => {
  console.log(user);
  const [Follow, setFollow] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="profileCard" id={theme}>
        <img src={user.user.picture.large} alt="Profile-pic" />
        <h2>
          <span>{user.user.name.first}</span> <span>{user.user.name.last}</span>
        </h2>
        <p>Frontend Developer | UI/UX Enthusiast</p>
        <button onClick={() => setFollow((prev) => !prev)}>
          {Follow ? "Following" : "Follow"}
        </button>
      </div>
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
        onColor={"#000000"}
      />
    </>
  );
};

export default ProfileCard;
