import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Logo from "../../assets/logos/SpaceXWhite.svg";
import React from "react";

function Header() {
  return (
    <header className="flex shadow-md z-[1000] absolute top-0 w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-xl text-white flex-row justify-end px-5 py-2 items-center">
      <div className="md:w-[150px] w-[200px] left-0 absolute  overflow-hidden">
        <img
          src={Logo}
          alt="galaxy-image"
          className="  object-cover object-top w-full h-full"
        />
      </div>
      <Avatar
        size={1}
        url={
          "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556778.jpg?w=740&t=st=1693136492~exp=1693137092~hmac=c6492e52b1bb1b450573ab0d6248da2433c6286d1ad28bc4dc23a679c73f376c"
        }
      />
    </header>
  );
}

export default Header;
