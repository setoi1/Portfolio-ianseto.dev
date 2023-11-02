import './styles/Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h1 className="experience-header-text">Experience</h1>
      <div className="experience-content">
        <div className="experience-detail">
          <ul className="experience-list">
            <li className="experience-item">
              <div className='experience-item-content'>
                <h3>SS&C Intralinks | Software Engineer Intern</h3>
                <h4>June 2021 - December 2021</h4>
                <p>
                  Developed investment management and fund reporting solutions that is used by over 515,000 individuals from 100,000 organizations. 
                  Implemented various frontend and backend features, most notably a critical faul-tolerance and recovery system.
                </p>
              </div>
            </li>
          <br></br>
            <li className="experience-item">
              <div className='experience-item-content'>
                <h3>Wentworth Institute of Technology | Software Engineer Intern</h3>
                <h4>September 2022 - December 2022</h4>
                <p>
                  Led a team of 4 members to design and develop a 2D platformer game that aimed to educate the public on the effects of global pollution on Earth's oceans. 
                  Implemented core game engine features using Object-Oriented design principles, as well as providing mentorship to group members who were unfamiliar with Agile and Scrum methodologies, version control, pull requests, and testing.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
