import React, { SetStateAction, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { proposal } from './../../types';
import './projects.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
type props = {
  setApprovedProposals: React.Dispatch<SetStateAction<proposal[]>>;
  approvedProposals: proposal[];
};
const useStyles = makeStyles({
  pencilIcon: {},
});

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
  const classes = useStyles();

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
            <Card className="card">
              <CardContent style={{ textAlign: 'center' }}>
                <Typography style={{ fontSize: '20px' }}>
                  {proposal.title}
                </Typography>
              </CardContent>
              <CardActions style={{ alignSelf: 'flex-end' }}>
                <IconButton
                  className={classes.pencilIcon}
                  aria-label="delete"
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
                  <CreateIcon fontSize="small" />
                </IconButton>
              </CardActions>
            </Card>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <Paper variant="outlined" elevation={3} className="paper">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: '20px' }}>
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
            <div style={{ marginTop: '30px' }}>
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
            <div style={{ marginTop: '20px' }}>
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
            <div style={{ marginTop: '30px' }}>
              <TextField
                className="imageInput"
                required
                id="standard-basic"
                label="Image"
                name="image"
                value={formValue.image}
                onChange={handleChange}
              />
            </div>

            {/* <div>Completion</div>
          <input
            name="completion"
            value={formValue.completion}
            type="text"
            onChange={handleChange}
          ></input> */}
            <div style={{ marginTop: '100px' }}>
              <Button
                id="submit-button"
                variant="outlined"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Paper>
      <div className="projects-container"></div>
    </div>
  );
};

export default Projects;
