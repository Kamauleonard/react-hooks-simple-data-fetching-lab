import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the dog image
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        // Set the dog image URL and update loading state
        setDogImageUrl(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;

