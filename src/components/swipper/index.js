"use client"

import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { swiperData } from "@settings/data/links.js";

const Swiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % swiperData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + swiperData.length) % swiperData.length
    );
  };

  const handleBreadcrumbClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.swiperContainer}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={swiperData[currentIndex].imgPath}
          alt={swiperData[currentIndex].title}
        />
        <div className={styles.imgButton}>{swiperData[currentIndex].action}</div>
        <h2 className={styles.imgTitle}>{swiperData[currentIndex].title}</h2>
        <span className={styles.imgDescription}>{swiperData[currentIndex].description}</span>
      </div>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevSlide}
      >
        &#8592;
      </button>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextSlide}
      >
        &#8594;
      </button>

      <div className={styles.breadcrumbs}>
        {swiperData.map((_, index) => (
          <span
            key={index}
            className={`${styles.breadcrumb} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleBreadcrumbClick(index)} 
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
