export function CapsulesCard({ capsule, setSelectedItem, setModalOpen }) {
  const handleDetails = () => {
    setSelectedItem(capsule);
    setModalOpen(true);
  };

  return (
    <div
      onClick={handleDetails}
      className="border-gray-300 p-5 bg-white w-full h-full text-black text-sm relative overflow-hidden text-center justify-center flex flex-col items-center rounded-lg shadow-md"
    >
      <div className="w-full h-full left-0">
        {/* Display capsule type */}
        <div>
          <h2 className=" text-xl text-blue-500  font-bold mb-2">
            {capsule?.type}
          </h2>
          <h2 className="text-md text-gray-500 font-semibold mb-2">
            Status: {capsule?.status}
          </h2>
          <h2 className="text-md text-gray-500 font-semibold mb-2">
            launches: {capsule?.launches?.length}
          </h2>
        </div>
        {/* Display capsule details */}
        <p className="text-gray-600">{capsule?.details}</p>
      </div>
    </div>
  );
}
