import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  const [isPath, setIsPath] = useState(false);
  const [title, setTitle] = useState("Home");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/photogallery") {
      setTitle("Photo gallery");
      setIsPath(true);
    } else {
      setTitle("Home");
      setIsPath(false);
    }
  }, [isPath]);

  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.content}>
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
        {children}
      </div>
    </div>
  );
};

export default Layout;
