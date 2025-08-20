import css from "./ImageCard.module.css";

export default function ImageCard({ image, handleClick }) {
  return (
    <div className={css.photoCard} onClick={() => handleClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </div>
  );
}
