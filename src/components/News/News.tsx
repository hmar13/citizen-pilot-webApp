import React, { useState, useEffect } from 'react'
import './contacts.css';
import NewsItems from './NewsItems/NewsItems';
import TextField from '@material-ui/core/TextField';

const MOCKS = [
  {
    title: "Some Title",
    shortDescription: "this is where the short description is",
    longDescription: "this is where the long description is",
    location: 'Gold Coast',
    image: "url.jpg",
    date: "13/04/2021",
    categories: "category name here",
  },
  {
    title: "Some Title",
    shortDescription: "this is where the short description is",
    longDescription: "this is where the long description is",
    location: 'Gold Coast',
    image: "url.jpg",
    date: "13/04/2021",
    categories: "category name here",
  },
  {
    title: "Some Title",
    shortDescription: "this is where the short description is",
    longDescription: "this is where the long description is",
    location: 'Gold Coast',
    image: "url.jpg",
    date: "13/04/2021",
    categories: "category name here",
  },
];

const News = () => {
  const [ news, setNews ] = useState();

  // useEffect(() => {
  //   MOCKS.forEach(element => {
  //     setNews({ ...news, element })
  //   });
  // })

  return (
    <div>
      <h1>News</h1>
      <div>
        <form>
        <div>
          <TextField
              className="titleInput"
              required
              id="standard-basic"
              label="Title"
              name="title"
            />
          </div>
          <div>
          <TextField
              className="shortDescriptionInput"
              required
              id="standard-basic"
              label="ShortDescription"
              name="shortDescription"
            />
          </div>
          <div>
          <TextField
              className="longDescriptionInput"
              required
              id="standard-basic"
              label="LongDescription"
              name="longDescription"
            />
          </div>
          <div>
          <TextField
              className="locationInput"
              required
              id="standard-basic"
              label="Location"
              name="location"
            />
          </div>
          <div>Image</div>
          <input
            name="image"
            type="text"
          ></input>
          <input
            name="date"
            type="text"
          ></input>
          <input
            name="category"
            type="text"
          ></input>
        </form>
      </div>
      {/* <div>
        {news ? news.map((news: NewsType) => (
          <NewsItems news={news} />
        )) : null}
      </div> */}
    </div>
  )
}

export default News;
