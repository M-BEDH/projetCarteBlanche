
import { useState } from "react";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";

const images = [img1, img2, img3];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <img
        src={images[current]}
        alt="image nature"
        style={{ width: "300px", height: "auto", borderRadius: "10px" }}
      />
      <br />
      <button className="btn btn-info mt-3" onClick={nextImage}>
        Image suivante
      </button>
    </div>
  );
}

export default ImageSlider;
