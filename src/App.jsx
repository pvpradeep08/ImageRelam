

import "./App.css";
import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=48545782-7e233321c2993d04caace3039&q=${search}&image_type=photo`
    )
      .then((res) => res.json())
      .then((d) => setData(d.hits));
  }, [search]); // Add dependency to avoid infinite re-renders

  const downloadImage = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <div>
      <Navbar name="ImageRelam">
        <div className="search">
          <input
            placeholder="Search your free Images here"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Navbar>

      <div className="image-container">
        {data.map((item, index) => {
          return (
            <div key={index} className="image-wrapper">
              <img
                src={item.largeImageURL}
                height={item.webformatHeight}
                width={item.webformatWidth}
                alt="search result"

                
                
              />
              <button
                className="download-btn"
                onClick={() => downloadImage(item.largeImageURL)}
              >
                Download
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;



