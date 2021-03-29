import React from 'react'
import './news-items.css';

interface newsInterface {
  title: string;
  shortDescription: string;
  longDescription: string;
  location: string;
  image: string;
  date: string;
  categories: string[];
}

const NewsItems:React.FC<newsInterface> = ( news ) => {
  return (
    <div>
      <h1>{news.title}</h1>
      <h2>{news.shortDescription}</h2>
      <h2>{news.longDescription}</h2>
    </div>
  )
}

export default NewsItems;
