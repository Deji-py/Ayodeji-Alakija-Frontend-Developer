import React from "react";

function Avatar({ size, url, radius }) {
  return (
    <div
      className={`w-[30px] scale-[${size}] rounded-full overflow-hidden h-[30px]  bg-gray-400`}
    >
      <img src={url} className="w-full h-full " alt="avatar_image" />
    </div>
  );
}

export default Avatar;
