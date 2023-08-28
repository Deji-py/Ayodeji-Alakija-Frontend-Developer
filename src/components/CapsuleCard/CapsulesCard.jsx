export function CapsulesCard({ capsule, setSelectedItem, setModalOpen }) {
  const handleDetails = () => {
    setSelectedItem(capsule);
    setModalOpen(true);
  };

  return (
    <div
      onClick={handleDetails}
      className="border-gray-300 p-5 border-t-cyan-600 border-t-2 bg-white w-full h-full text-black text-sm relative overflow-hidden text-center justify-center flex flex-col items-center rounded-b-lg shadow-md"
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-1  left-0">
        {/* Display capsule type */}

        <h2 id="modal-modal-title" variant="h6" className="text-xl font-bold ">
          {capsule?.type}
        </h2>
        <div className="flex text-[14px] flex-row text-blue-500 justify-start items-center gap-1">
          <p>Serial No.:</p>
          <p>{capsule?.serial}</p>
        </div>

        <h2 className="text-md text-gray-500 font-semibold mb-2">
          launches: {capsule?.launches?.length}
        </h2>

        {/* Display capsule details */}
        <p className="text-gray-600">
          {capsule?.last_update.slice(0, 20) + "..."}
        </p>
      </div>
    </div>
  );
}
