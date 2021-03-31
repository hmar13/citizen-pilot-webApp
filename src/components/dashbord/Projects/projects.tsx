import React from 'react';
import './projects.css';
import Project from './Project/project';

const MOCKDATA = [
  {
    title: 'Roadworks on the M3 Motorway',
    description: 'Currently there a significant roadworks being completed on the M3 Motorway between exits 49 and 54 with an expected completion time of June 2021',
    location: 'M3 Exits 49 to 54',
    completion: 30,
    image:
      'https://images.unsplash.com/photo-1612878100556-032bbf1b3bab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    title: 'New playground in Southport',
    description: 'Southport will be the destination for a brand new childrens playground for ages 4+',
    location: '14 Herry Street, Southport',
    completion: 40,
    image:
      'https://images.unsplash.com/photo-1586250127208-8218b38ff1cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    title: 'Smart City Application Rollout',
    description: 'The city has ordered a smart city mobile application with Citizen Pilot developers with the testing rollout expected to happen in August 2021',
    location: 'Gold Coast',
    completion: 20,
    image:
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Honouring Corona Laufer',
    description: 'In regards to Corona Laufers recent achievements of donating multiple benches to the city, we are building the worlds largest bench on the Broadwater in Main Beach',
    location: '143 Surf Parade, Main Beach',
    completion: 80,
    image:
      'https://images.unsplash.com/photo-1561326598-8e19291f9c7b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
];

const ProjectTab = () => {
  return (
    <div className="Project-Tab">
      <div className="Project-tab-header-text-containter">
        {/* <div className="red-color-box"></div> */}
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
