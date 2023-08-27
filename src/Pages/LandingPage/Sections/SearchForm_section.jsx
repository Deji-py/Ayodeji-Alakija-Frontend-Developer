import React, { useContext } from "react";
import { searchContext } from "../../../context/SearchContext";

const Chip = () => {
  return (
    <div className="text-[12px] backdrop-blur-md px-5 rounded-full border-[0.2px] border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.5)]">
      chip
    </div>
  );
};

function SearchFormSection() {
  const { searchTerm, setSearchTerm, search, data } = useContext(searchContext);

  const handleSubmit = () => {
    console.log("woyk");
    search();
  };
  console.log(data);
  return (
    <section className="w-fit h-[100px]   flex flex-col  justify-center items-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-[60vw] h-[40px]  md:w-fit    flex-row justify-center items-center"
      >
        <select
          id="filterBy"
          className="block w-[100px]  text-[14px] bg-gray-200 text-black h-full p-2 rounded-l-md shadow-md"
        >
          <option value="">All</option>
          <option value="option1">Status</option>
          <option value="option2">Original_launch</option>
          <option value="option3">type</option>
        </select>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="flex-1 p-2 h-full text-black shadow-md"
          placeholder="search here..."
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 px-5 rounded-r-md"
        >
          Q
        </button>
      </form>

      <div className="flex translate-y-[10px] flex-row py-2 justify-center items-center gap-5">
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </div>
    </section>
  );
}

export default SearchFormSection;
