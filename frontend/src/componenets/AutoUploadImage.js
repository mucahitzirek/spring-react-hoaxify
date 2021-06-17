import React from "react";
import "./AutoUploadImage.css";
const AutoUploadImage = ({ image, uploading }) => {
  return (
    <div style={{ position: "relative" }}>
      <img className="img-thumbnail" src={image} alt="hoax-attachment" />
      <div className="overlay" style={{ opacity: uploading ? 1 : 0 }}>
        {/* uploading true ise opacity 1 olsun false ise 0 olsun  */}
        <div className="d-flex justify-content-center h-100">
          <div className="spinner-border text-light m-auto">
            <spinner className="sr-only">Loading...</spinner>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoUploadImage;
  