import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './ProjectCard.css';

interface ProjectData {
  id: number,
  image: string;
  title: string;
  techStack: Array<TechStack>;
  description: string;
  link: string;
}

interface TechStack {
  id: number,
  tech: string
}

export default function ProjectCard(props: ProjectData) {
  return (
    <div className='project-card-wrapper'>
      <a 
        href={props.link} 
        target='_blank' 
        rel='noopener noreferrer'
      >
        <Card sx={{ minWidth: 240, minHeight: 240, maxWidth: 480, maxHeight: 480 }} style={{ backgroundColor: 'rgb(18, 29, 63)', borderRadius: 20, height: 480, width: 240 }}>
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
            <ul className='tech-stack-list'>
              {props.techStack.map(tech => 
                <li key={tech.id}>
                  <Typography>
                    {tech.tech}
                  </Typography>
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}
