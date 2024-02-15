// ImageItem.js
import React, { useState, useEffect } from "react";
import SkeletonElement from "./SkeletonElement";
import styles from "./styles.module.css";

const ImageItem = ({ src, alt, title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      setLoading(false);
    };

    return () => {
      imageLoader.onload = null;
    };
  }, [src]);

  return (
    <div className={styles.item}>
      <div className={styles.polaroid}>
        {loading ? (
          <SkeletonElement cards={1} />
        ) : (
          <img src={src} alt={alt} className={styles.visibleImage} />
        )}
        <div className={styles.caption}>{title}</div>
      </div>
    </div>
  );
};

export default ImageItem;
