import Head from 'next/head';
import React from 'react'
import PhotoGallery from '../components/PhotoGallery';

const Photogallery = () => {
  return (
    <div className="container">
      <Head>
        <title>Photo gallery</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <PhotoGallery />
    </div>
  )
}

export default Photogallery;