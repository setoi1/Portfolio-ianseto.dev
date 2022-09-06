import React from 'react';
import { Paper, Card, CardContent, CardActions, Button } from '@material-ui/core';

const ProjectCard = (props) => {
  return (
    <Paper elevation={12} style={{backgroundColor: "#212121"}}>
      <Card className="project-card-container" style={{backgroundColor: "#212121"}}>
        <CardContent style={{color: "white"}}>
          <h1>
            {props.title}
          </h1>
          <h2>
            {props.date}
          </h2>
          <h3>
            {props.techStack}
          </h3>
          <p>
            {props.description}
          </p>
        </CardContent>
        <CardActions className="project-card-actions">
          <Button className="project-card-link-button" size="small" href={props.link} target="_blank" style={{color: "white"}}>
            Link
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}

export default ProjectCard;
