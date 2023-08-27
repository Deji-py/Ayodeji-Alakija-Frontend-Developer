import React, { createContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

export const searchContext = createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  setData: () => {},
  data: null,
  search: () => {},
});

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const search = async () => {
    console.log("gggo");
    const apiUrl = `https://api.spacexdata.com/v4/rockets?search=${searchTerm}`;
    if (searchTerm.length > 0) {
      fetchData(apiUrl);
    }
  };

  const value = {
    searchTerm,
    setSearchTerm,
    data,
    loading,
    error,
    search,
  };

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
}

export default SearchProvider;
