import React from "react";

function Button({ icon, label, buttonStyle }) {
  return (
    <button
      className={`flex flex-row hover:bg-[whitesmoke]  text-black uppercase font-bold p-2 px-5 bg-white  rounded-full `}
      style={{ buttonStyle }}
    >
      {icon && icon}
      {label}
    </button>
  );
}

export default Button;
