import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({
  image,
  isOpen,
  closeModal = { closeModal },
}) {
  ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.7)";

  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      className={css.modal}
    >
      <div>
        {isOpen ? (
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={css.image}
          />
        ) : (
          <img src="" alt="" />
        )}
      </div>
    </ReactModal>
  );
}
