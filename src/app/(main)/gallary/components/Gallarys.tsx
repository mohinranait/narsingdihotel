'use client';
import { gallarys } from '@/constants/gallary';
import React, { useEffect } from 'react'
import GallaryCard from './GallaryCard';
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/style.css";

const Gallarys = () => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#hotel-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "zoom",
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div
      id="hotel-gallery"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      {gallarys.map((item, index) => (
        <a
          key={index}
          href={item.image}
          data-pswp-width="800"
          data-pswp-height="600"
          target="_blank"
          rel="noreferrer"
        >
          <GallaryCard data={item} />
        </a>
      ))}
    </div>
  )
}

export default Gallarys