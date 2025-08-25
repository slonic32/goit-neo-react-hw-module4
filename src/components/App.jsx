import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { searchImages } from "../unSplashApi";

import { useEffect, useState } from "react";

import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [modal, setModal] = useState(false);
  const [currentImage, setCurrentImage] = useState({});
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);

        const imageArray = await searchImages(query, page, 12);
        if (page === 1) {
          //new search
          setImages(imageArray.results);
        } else {
          setImages(images => [...images, ...imageArray.results]);
        }
        setTotalPages(imageArray.total_pages);
      } catch {
        if (page === 1) {
          //new search
          setImages([]);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  function handleSearch(newQuery) {
    const q = newQuery.trim();
    if (!q) return;
    setQuery(q);
    setPage(1);
    setImages([]);
    setTotalPages(0);
    setError(false);
  }

  function handleLoadMore() {
    if (!loading && page < totalPages) {
      setPage(prev => prev + 1);
    }
  }

  function openModal(image) {
    setCurrentImage(image);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      <ImageGallery imagesArray={images} handleClick={openModal} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal image={currentImage} isOpen={modal} closeModal={closeModal} />
    </>
  );
}
