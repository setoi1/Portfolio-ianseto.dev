import { Typography } from '@mui/material';
import './styles/TechStack.css';

export default function TechStackItem(props: string) {
  return (
    <>
      <div className='tech-stack-item'>
        <Typography>
          {props.text}
        </Typography>
      </div>
    </>
  );
};