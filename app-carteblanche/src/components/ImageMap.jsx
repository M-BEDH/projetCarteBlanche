import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";

const images = [
  img1,
  img2,
  img3
];

function ImageMap() {
  return (
    <div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="image"
          style={{ width: "250px", margin: "10px", borderRadius: "10px" }}
        />
      ))}
    </div>
  );
}

export default ImageMap;
