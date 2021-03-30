import React from 'react';
import './projects.css';
import Project from './Project/project';

const MOCKDATA = [
  {
    title: 'New School in the village',
    description: 'We ar ebuilding a new school in the village for 300 students',
    location: 'Second Biggest Village',
    completion: 30,
    image:
      'https://static01.nyt.com/images/2010/05/06/nyregion/06newschool-1/06newschool-1-popup.jpg?quality=75&auto=webp&disable=upscale',
  },
  {
    title: 'New Park in the abandoned area',
    description: 'We are builing in new park in the city with 300 trees',
    location: 'Old town',
    completion: 40,
    image:
      'https://cdn1.vectorstock.com/i/1000x1000/40/15/city-public-park-or-square-object-3d-isometric-vector-20814015.jpg',
  },
  {
    title: 'New sewage system in town',
    description: 'Renovating the sewage system',
    location: 'City',
    completion: 20,
    image:
      'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/sewage-treartment-plant-bengaluru_0.jpeg?itok=Tdj7LiNW',
  },
];

const ProjectTab = () => {
  return (
    <div className="Project-Tab">
      <div className="Project-tab-header-text-containter">
        <div className="red-color-box"></div>
        <p className="Project-tab-header-text">Projects</p>
      </div>
      <div>
        {MOCKDATA.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTab;
