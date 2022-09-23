import { Paper, Card, CardContent, CardActions, Button } from '@material-ui/core';

const ProjectCard = (props: any) => {
  return (
    <div className="project-item-container">
      <Paper className="project-paper-container" elevation={12} style={{backgroundColor: "#212121"}}>
        <Card className="project-card-container" style={{backgroundColor: "#212121"}}>
          <CardContent style={{color: "white"}}>
            <img className="card-media" src={process.env.PUBLIC_URL + '/React-icon.svg.png'} alt="" />
            <h1>
              {props.title}
            </h1>
            <h2>
              {props.date}
            </h2>
            <h3>
              {props.techStack}
            </h3>
          </CardContent>
          <CardActions className="project-card-actions">
            <Button className="project-card-link-button" size="small" href={props.link} target="_blank" style={{color: "white"}}>
              Link
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </div> 
  );
}

export default ProjectCard;
