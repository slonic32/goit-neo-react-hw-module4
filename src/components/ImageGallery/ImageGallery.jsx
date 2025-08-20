import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ imagesArray, handleClick }) {
  return (
    <ul className={css.gallery}>
      {imagesArray.map((item) => {
        return (
          <li className={css.galleryItem} key={item.id}>
            <ImageCard image={item} handleClick={handleClick} />
          </li>
        );
      })}
    </ul>
  );
}
