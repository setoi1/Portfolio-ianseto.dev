import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import TechStackList from './TechStackList';
import './styles/ProjectCard.css';

interface ProjectData {
  image: string;
  title: string;
  techStack: Array<string>;
  description: string;
  link: string;
}

export default function ProjectCard(props: ProjectData) {
  return (
    <>
      <a 
        href={props.link} 
        target='_blank' 
        rel='noopener noreferrer'
      >
        <Card sx={{ minWidth: 280, minHeight: 480, maxWidth: 280, maxHeight: 440 }} style={{ backgroundColor: 'rgb(18, 29, 63)', borderRadius: 20 }}>
          <CardMedia
            style={{height: 140}}
            image={props.image}
          />
          <CardContent style={{color: 'white'}}>
            <Typography gutterBottom variant='h5' component='div' style={{color: 'white'}}>
              {props.title}
            </Typography>
            <Typography variant='body2' style={{color: 'white'}}>
              {props.description}
            </Typography>
            <TechStackList techStack={props.techStack} />
          </CardContent>
        </Card>
      </a>
    </>
  );
}
