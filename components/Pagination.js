import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PhotosContainer from "./PhotosContainer";
import styles from "../styles/PhotoGallery.module.scss";

const Pagination = ({ itemsPerPage, images }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(images.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(images.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, images]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % images.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <PhotosContainer photos={currentItems} />
      <ReactPaginate
        nextLabel={
          <button className={styles.paginationButton}>
            <i className="ri-arrow-right-fill"></i>
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <button className={styles.paginationButton}>
            <i className="ri-arrow-left-fill"></i>
          </button>
        }
        renderOnZeroPageCount={null}
        className={styles.pagination}
        pageClassName={styles.pages}
      />
    </>
  );
};

export default Pagination;
