import React, { SetStateAction, useState } from 'react';
import { proposal } from './../../types';
import './projects.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/TextField';

type props = {
  setApprovedProposals: React.Dispatch<SetStateAction<proposal[]>>;
  approvedProposals: proposal[];
};

const initalData = {
  title: '',
  description: '',
  location: '',
  image: '',
  completion: 0,
};

// const handleProposalClick = () => {
//   setFormValue({
//     title: Proposals.title
//   })
// };

const Projects: React.FC<props> = ({
  approvedProposals,
  setApprovedProposals,
}) => {
  const [formValue, setFormValue] = useState(initalData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    // CHECK THE TYPE OF EVENT!!!!
    e.preventDefault();
    setFormValue(initalData);
  };

  return (
    <div className="containerProjects">
      <div className="proposals-container">
        {approvedProposals ? (
          approvedProposals.map((proposal) => (
            <div
              className="proposal"
              onClick={() => {
                setFormValue({
                  title: proposal.title,
                  description: proposal.description,
                  location: proposal.location,
                  image: proposal.image,
                  completion: 0,
                });
              }}
            >
              <div>{proposal.title}</div>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div style={{ height: '10vh' }}>
            <TextField
              className="titleInput"
              required
              id="standard-basic"
              label="Title"
              name="title"
              value={formValue.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              className="descriptionInput"
              required
              id="outlined-required"
              label="Description"
              name="description"
              value={formValue.description}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={7}
            />
          </div>
          <div style={{ height: '10vh' }}>
            <TextField
              className="locationInput"
              required
              id="standard-basic"
              label="Location"
              name="location"
              value={formValue.location}
              onChange={handleChange}
            />
          </div>

          <div>Image</div>
          <input
            name="image"
            value={formValue.image}
            type="text"
            onChange={handleChange}
          ></input>
          <div>Completion</div>
          <input
            name="completion"
            value={formValue.completion}
            type="text"
            onChange={handleChange}
          ></input>
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="projects-container"></div>
    </div>
  );
};

export default Projects;
