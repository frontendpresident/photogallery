import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteByIdThunk, openImage } from "../redux/actions";
import styles from "../styles/Photo.module.scss";

const Photo = ({ image, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.photo}>
      <Image
        src={image}
        width={75}
        height={75}
        alt={String(id)}
      />
      <div className={styles.mask}>
        <i className="ri-eye-fill" onClick={() => dispatch(openImage(id))}></i>
        <i
          className="ri-delete-bin-7-fill"
          onClick={() => dispatch(deleteByIdThunk(id))}
        ></i>
      </div>
    </div>
  );
};

export default Photo;
