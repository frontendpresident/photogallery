import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "../styles/Header.module.scss"

const CustomHeader = () => {
  const [isPath, setIsPath] = useState(false)
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/photogallery") {
      setIsPath(true)
    } else {
      setIsPath(false)
    }
  }, [isPath])

  return (
    <div className={styles.headerContainer}>
      <Link href="/">
        <div
          className={styles.headerItem}
          style={{ borderBottom: isPath ? "" : "1px solid white" }}
        >
          <i className="ri-home-2-fill"></i>
          Home
        </div>
      </Link>
      <Link href="/photogallery">
        <div
          className={styles.headerItem}
          style={{ borderBottom: !isPath ? "" : "1px solid white" }}
        >
          <i className="ri-gallery-fill"></i>
          Gallery
        </div>
      </Link>
    </div>
  )
}

export default CustomHeader