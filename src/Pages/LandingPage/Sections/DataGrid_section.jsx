import SuggestedCategories from "../../../components/Suggested Categories/SuggestedCategories";
import useFetch from "../../../Hooks/useFetch";
import { useEffect } from "react";

const ItemCard = () => {
  return (
    <div className="w-full h-full bg-gray-400">
      <div>Main content</div>
      <div>Footer</div>
    </div>
  );
};

function DataGridSection() {
  const apiUrl = "https://api.spacexdata.com/v4/rockets"; // SpaceX API endpoint
  const { data, loading, error } = useFetch(apiUrl);

  useEffect(() => {
    // Handle data, loading, and error states here
    if (loading) {
      console.log("Loading SpaceX data...");
    }
    if (error) {
      console.error("Error fetching SpaceX data:", error);
    }
    if (data) {
      console.log("Fetched SpaceX data:", data);
    }
  }, [data, loading, error]);

  const items = [];
  return (
    <>
      <SuggestedCategories />
      <section className="grid p-5 grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-fit gap-2">
        {items.map((_, key) => {
          return <ItemCard key={key} />;
        })}
      </section>
    </>
  );
}

export default DataGridSection;
