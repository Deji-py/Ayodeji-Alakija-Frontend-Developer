import React from "react";
import useFetch from "../../Hooks/useFetch";
import { RocketCard } from "./componenets/CategoryCard";

function SuggestedCategories({ category }) {
  const apiUrl = `https://api.spacexdata.com/v4/rockets?filter=${category}`;
  const { data, loading, error } = useFetch(apiUrl);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="pt-5">
      <div className="flex px-2 p-2 flex-row gap-2 justify-center md:justify-start items-center overflow-x-scroll">
        {data.map((rocket, key) => (
          <RocketCard key={rocket.id} index={key} rocket={rocket} />
        ))}
      </div>
    </div>
  );
}

export default SuggestedCategories;
