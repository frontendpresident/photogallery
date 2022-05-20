import React, { useEffect } from 'react'
import CustomHeader from "./CustomHeader"
import styles from '../styles/PhotoGallery.module.scss'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import Photo from './Photo'
import { closeImage, getImagesThunk, getInfoThunk } from '../redux/actions'

const PhotoGallery = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoThunk())
    dispatch(getImagesThunk())
  }, [])

  const {
    images,
    title,
    description,
    openImage,
    isOpenImage
  } = state;

  return (
    <div className={styles.galleryContent}>
      <CustomHeader />
      <div className={styles.photosContainer}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <p>
            {description}
          </p>
        </div>
        <div style={{
          height: 300,
          borderBottom: "1px solid rgba(0, 0, 0, 0.39)"
        }}>
          {images.length > 0
            ? (
              <div className={styles.photoBlock}>
                {images.map(photo => (
                  <Photo
                    key={photo.id}
                    image={photo.image}
                    id={photo.id}
                  />
                ))}
              </div>
            )
            : <div className={styles.empty}>
              <span>No photos</span>
            </div>
          }
        </div>
        <div className={styles.paginationButtons}>
          <button>
            <i class="ri-arrow-left-fill"></i>
          </button>
          <button>
            <i class="ri-arrow-right-fill"></i>
          </button>
        </div>
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
  )
}

export default PhotoGallery