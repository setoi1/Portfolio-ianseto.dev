import './styling/Landing.css';

import { Button } from '@material-ui/core';

const Landing = () => {

  let mobile = false;

  if (window.innerWidth < 480) {
    mobile = true;
  }

  return (
    <main className="landing-page">
      <div className="page-container">
        {mobile === false &&
          <video autoPlay={true} loop={true} muted id="myVideo">
            <source src={process.env.PUBLIC_URL + '/landingvideo.mp4'} type="video/mp4"/>
          </video>
        }
        <h3 className="page-header-text">Explore</h3>
        <Button className="landing-button" variant="outlined" href="/about">
          Enter
        </Button>
      </div>
    </main>
  );
}

export default Landing;
