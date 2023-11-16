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
        <Card sx={{  minWidth: 360, minHeight: 360, maxWidth: 360, maxHeight: 360 }} style={{ backgroundColor: '#D2CCCB', borderRadius: 20 }}>
          {/*}
          <CardMedia
            style={{height: '50%'}}
            image={props.image}
          />
        */}
          <CardContent style={{color: 'black'}}>
            <Typography gutterBottom variant='h4' component='div' style={{color: 'black'}}>
              {props.title}
            </Typography>
            <Typography variant='body1' style={{color: 'black'}}>
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
