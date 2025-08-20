import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick, filter, currentPage }) {
  return (
    <button
      onClick={() => onClick(filter, currentPage + 1)}
      className={css.button}
    >
      Load more
    </button>
  );
}
