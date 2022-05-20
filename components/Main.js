import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image';
import ImageUploading from 'react-images-uploading';
import styles from "../styles/Main.module.scss"
import CustomHeader from './CustomHeader';
import { 
  getInfoThunk, 
  getImagesThunk, 
  setImageThunk, 
  setInfoThunk,
  deleteAllThunk 
} from '../redux/actions';

const Main = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const [images, setImages] = useState([])

  useEffect(() => {
    dispatch(getInfoThunk())
  }, [])

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const setInfo = () => {
    const data = {
      title: state.title,
      description: state.description
    }
    dispatch(setInfoThunk(data))
  }

  return (
    <div className={styles.content}>
      <CustomHeader />
      <div className={styles.inputs}>
        <label>Tittle:</label>
        <input
          type="text"
          className={styles.title}
          onChange={(e) => dispatch({ type: "SET_TITLE", text: e.target.value })}
          value={state.title}
        />
        <label>Description:</label>
        <textarea
          className={styles.description}
          style={{ minHeight: 50 }}
          onChange={(e) => dispatch({ type: "SET_DESC", text: e.target.value })}
          value={state.description}
        />
      </div>
      <ImageUploading
        value={images}
        onChange={onChange}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <>
            <div
              className={styles.uploadContainer}
              style={{ borderColor: isDragging ? "blue" : "black" }}
              onClick={onImageUpload}
              {...dragProps}
            >
              {images.length > 0
                ? images.map(item => (
                  <Image
                    key={item.file.size}
                    src={item.data_url}
                    alt="images"
                    width={180}
                    height={180}
                  />
                ))
                : <span>Drag photos here</span>
              }
            </div>
            {imageList.length > 0 && (
              <div className={styles.imageButtons}>
                <button
                  className={styles.saveButton}
                  onClick={() => {
                    dispatch(setImageThunk(imageList[0].data_url))
                    setInfo()
                    onImageRemove()
                  }}
                >
                  <i class="ri-save-fill"></i>
                </button>
                <button
                  className={styles.removeButton}
                  onClick={() => onImageRemove()}>
                  <i class="ri-delete-bin-7-fill"></i>
                </button>
              </div>
            )}
          </>
        )}
      </ImageUploading>
      <button
        onClick={() => dispatch(deleteAllThunk(state.images))}
        className={styles.deleteAllButton}
      >
        Delete ALL photos
      </button>
    </div>
  )
}

export default Main