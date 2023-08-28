import useFetch from "../../../Hooks/useFetch";
import { useContext, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SpaceXContext } from "../../../context/SpaceXData";

function SearchFormSection() {
  const { setSpaceXData } = useContext(SpaceXContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const apiUrl = `https://api.spacexdata.com/v4/capsules`; // SpaceX API endpoint with query parameter
  const { data, loading, error } = useFetch(apiUrl);

  useEffect(() => {
    // Handle data, loading, and error states here
    if (data) {
      if (selectedFilter === "All") {
        const filteredData = data.filter((item) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setSpaceXData(filteredData);
      } else if (selectedFilter === "launches") {
        const filteredData = data.filter(
          (item) => item[selectedFilter].length === Number(searchTerm)
        );
        setSpaceXData(filteredData);
      } else {
        const filteredData = data.filter((item) =>
          item[selectedFilter].toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSpaceXData(filteredData);
      }
    }
  }, [loading, setSpaceXData, selectedFilter, searchTerm, data]);

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <section
      className={`w-full px-5 h-[100px] flex flex-col justify-center items-center`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex w-[60vw]  h-[40px] relative shadow-xl shadow-black md:w-full flex-row justify-center items-center"
      >
        <select
          id="filterBy"
          value={selectedFilter}
          onChange={handleFilterChange}
          className="block w-[100px] text-[14px] bg-gray-200 text-black h-full  p-2 rounded-l-md shadow-md"
        >
          <option value="All">All</option>
          <option value="status">Status</option>
          <option value="launches">launches</option>
          <option value="type">Type</option>
        </select>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="w-full rounded-r-md p-2 h-full text-black shadow-md"
          placeholder="Search here..."
        />
        <FaSearch className="absolute text-gray-500 right-3" />
      </form>
    </section>
  );
}

export default SearchFormSection;
