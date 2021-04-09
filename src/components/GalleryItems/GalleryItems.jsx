import React from 'react';
import cottages from '../Paintings/cottages';

const createLi = ({ image, alter, discript }) => (
  <li>
    <figure>
      <img src={image} alt={alter} />
      <figcaption>{discript}</figcaption>
    </figure>
  </li>
);

const GalleryItems = () => {
  return <ul>{cottages.map((cottage) => createLi(cottage))}</ul>;
};

export default GalleryItems;
