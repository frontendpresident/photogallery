import React, { useEffect } from "react";
import styles from "../styles/PhotoGallery.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { closeImage, getImagesThunk, getInfoThunk } from "../redux/actions";
import Pagination from "./Pagination";

const PhotoGallery = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoThunk());
    dispatch(getImagesThunk());
  }, []);

  const { images, title, description, openImage, isOpenImage, isLoading } =
    state;

  return (
    <div className={styles.galleryContent}>
      <div className={styles.photosContainer}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <p>{description}</p>
        </div>
        {isLoading || images.length === 0 ? (
          <div className={styles.empty}>
            <span>No photos</span>
          </div>
        ) : (
          <Pagination itemsPerPage={9} images={images} />
        )}
      </div>
      {isOpenImage && (
        <div
          onClick={() => dispatch(closeImage())}
          className={styles.openImage}
        >
          <Image src={openImage.image} width={150} height={150} />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
