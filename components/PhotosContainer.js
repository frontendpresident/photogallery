import React from "react";
import styles from "../styles/PhotoGallery.module.scss";
import Photo from "./Photo";

const PhotosContainer = ({ photos }) => {
  return (
    <div
      style={{
        height: 300,
        borderBottom: "1px solid rgba(0, 0, 0, 0.39)",
      }}
    >
      {photos && photos.length > 0 && (
        <div className={styles.photoBlock}>
          {photos.map((photo) => (
            <Photo key={photo.id} image={photo.image} id={photo.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotosContainer;
