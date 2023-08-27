export function RocketCard({ rocket }) {
  return (
    <div className="bg-gray-white border-gray-300 w-[200px] h-[250px] text-black text-sm relative overflow-hidden text-center justify-center flex flex-col items-center  flex-none rounded-lg shadow-md ">
      <img
        src={rocket.flickr_images[0]} // Assuming you have an array of image URLs
        alt={`Image of ${rocket.name}`}
        className="w-full h-32 object-cover mb-2"
      />
      <div className=" w-full h-full left-0">
        <h2 className="text-xl font-semibold mb-2">{rocket.name}</h2>
        <p>{rocket.description.slice(0, 50) + "..."}</p>
      </div>
    </div>
  );
}
