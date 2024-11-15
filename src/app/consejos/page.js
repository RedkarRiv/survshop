"use client"

import React, { useState } from 'react';
import styles              from './index.module.scss';
import { advicePosts }     from "@settings/data/links.js";


const Consejos = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar los posts basados en el query de búsqueda
  const filteredPosts = advicePosts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.blogContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.gridContainer}>
          {filteredPosts.map((post, index) => {
            let gridSpan = 1;
            if (index === 0 || index === 3) {
              gridSpan = 2; // Primer y cuarto post ocupan 2 columnas
            } else if (index === 7) {
              gridSpan = 3; // El último post ocupa las 3 columnas
            }
            
            return (
              <div key={post.id} className={styles.gridItem} style={{ gridColumn: `span ${gridSpan}` }}>
                <img src={post.imageUrl} alt={post.title} className={styles.image} />
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postDescription}>{post.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Consejos;
