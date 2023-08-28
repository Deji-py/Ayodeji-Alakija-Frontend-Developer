import DetailModal from "../../../components/DetailModal/DetailModal";
import { CircularProgress } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { CapsulesCard } from "../../../components/CapsuleCard/CapsulesCard";
import { SpaceXContext } from "../../../context/SpaceXData";

function DataGridSection() {
  const { spaceXData } = useContext(SpaceXContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (spaceXData) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [spaceXData]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  // Pagination logic
  const capsulesPerPage = 10;
  const indexOfLastRocket = currentPage * capsulesPerPage;
  const indexOfFirstRocket = indexOfLastRocket - capsulesPerPage;
  const currentRockets = spaceXData?.slice(
    indexOfFirstRocket,
    indexOfLastRocket
  );
  const totalPages = Math.ceil(spaceXData?.length / capsulesPerPage);

  if (loading) {
    return (
      <section className="h-[50vh] flex flex-col justify-center items-center">
        <CircularProgress />
      </section>
    );
  } else {
    return (
      <section className="w-full pt-5 bg-slate-100 flex flex-col justify-center items-center">
        <div className="grid  w-full grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-fit gap-5 p-2">
          {currentRockets.map((capsule, key) => (
            <CapsulesCard
              setSelectedItem={setSelectedItem}
              setModalOpen={setModalOpen}
              key={capsule.id}
              index={key}
              capsule={capsule}
            />
          ))}
        </div>
        <div className="my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <DetailModal
          open={modalOpen}
          item={selectedItem}
          handleClose={closeModal}
        />
      </section>
    );
  }
}

export default DataGridSection;
