import React from "react";
import defaultPicture from "../assets/profile.png";

const ProfilImageWithDefault = (props) => {
  const { image, tempimage } = props;
  let imageSource = defaultPicture;
  if (image) {
    // backendde bu klasor altinda resimleri kaydediyoruz o yuzden o yolu verdik
    imageSource = "images/profile/" + image;
  }
  return (
    <img
      alt={`Profile`}
      src={tempimage || imageSource}
      {...props}
      // Bir hata olursa srcyi defaultPicture say
      onError={(event) => {
        event.target.src = defaultPicture;
      }}
    />
  );
};
export default ProfilImageWithDefault;
