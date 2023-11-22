import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { ProjectData } from '../../types/Types';
import './ProjectCard.css';

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
          <CardContent style={{color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography variant='h3' style={{color: 'black', float: 'right', fontWeight: 500}}>{props.name}</Typography>
            {/*}
            <Typography variant='body1' style={{color: 'black'}}>
              {props.description}
            </Typography>
            */}
            <ul className='tech-stack-list'>
              {props.techStack.map(technology => 
                <li key={technology.id}>
                  <Typography>{technology.name}</Typography>
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}
