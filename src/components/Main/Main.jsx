import React from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';
const Main = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="">Портрети</a>
          </li>
          <li>
            <a href="">Пейзажі</a>
          </li>
          <li>
            <a href="">Натюрморти</a>
          </li>
          <li>
            <a href="">Тематичні</a>
          </li>
          <li>
            <a href="">Графіка</a>
          </li>
          <li>
            <a href="">Статті</a>
          </li>
          <li>
            <a href="">Книги</a>
          </li>
        </ul>
      </nav>
      <GalleryItems />
    </div>
  );
}

export default Main;