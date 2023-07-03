import { Paper, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { motion } from 'framer-motion';

import TechStackList from './TechStackList';

import './styles/ProjectCard.css';

const ProjectCard = (props: any) => {
  return (
    <>
      <article className="project-item-container">
        <Paper className="project-paper-container" elevation={12} style={{backgroundColor: "rgb(18, 29, 63)"}}>
          <Card className="project-card-container" style={{backgroundColor: "rgb(18, 29, 63)"}}>
            <CardMedia
              style={{height: "12vh"}}
              image={props.image}
            />
            <CardContent style={{color: "white"}}>
              <h1>{props.title}</h1>
              <h2>{props.date}</h2>
              <TechStackList techStack={props.techStack}/>
            </CardContent>
            <CardActions className="project-card-actions"><Button className="project-card-link-button" size="small" href={props.link} target="_blank" style={{color: "white"}}>Link</Button></CardActions>
          </Card>
        </Paper>
      </article> 
    </>
  );
}

export default ProjectCard;
