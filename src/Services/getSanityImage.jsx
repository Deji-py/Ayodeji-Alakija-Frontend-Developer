async function getImageUrlFromSanity(imageRef) {
  const sanityBaseUrl =
    "https://your-sanity-project-id.api.sanity.io/v1/data/query/production?query=";

  // Construct the query URL to fetch the asset details
  const queryUrl = `${sanityBaseUrl}*[_id == "${imageRef}"]`;

  try {
    const response = await fetch(queryUrl);
    const data = await response.json();

    if (data.result && data.result.length > 0) {
      return data.result[0].asset.url;
    } else {
      throw new Error("Image asset not found");
    }
  } catch (error) {
    console.error("Error fetching asset details:", error);
    return null;
  }
}

// Example usage
// const imageRef = "image-2219e9c5b1b4fa8d175ba7bf04ac671af751571b-640x360-jpg";
// getImageUrlFromSanity(imageRef).then((imageUrl) => {
//   if (imageUrl) {
//     console.log("Image URL:", imageUrl);
//   } else {
//     console.log("Image URL not available.");
//   }
// });

export default getImageUrlFromSanity;
