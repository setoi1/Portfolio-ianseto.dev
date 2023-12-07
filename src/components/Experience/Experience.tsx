
import './Experience.css';

const jobs = [
  {
    id: 0,
    link: 'https://www.intralinks.com/',
    company: 'SS&C Intralinks',
    title: 'Software Engineer Intern',
    date: 'Jun 2021 - Dec 2021',
    description: `Developed investment management and fund reporting solutions used by over 515,000 individuals from 100,000 organizations. 
    Implemented various frontend and backend features, most notably a critical faul-tolerance and recovery system.`,
  },
  {
    id: 1,
    link: 'https://wit.edu/',
    company: 'Wentworth Institute of Technology',
    title: 'Research Developer',
    date: 'Sep 2022 - Dec 2022',
    description: `Led a team of 4 members to design and develop a 2D platformer game that aimed to educate the public on the effects of global pollution on Earth's oceans. 
    Responsible for level design, core game engine features in Unity, and provided mentorship to group members on with Agile / Scrum 
    methodologies, version control, pull requests, and testing.`,
  },
];

export default function Experience() {
  return (
    <section id='experience' className='experience'>
      <div className='experience-wrapper'>
        <h2>Experience</h2>
        <hr></hr>
        <div className='experience-content'>
          <ul className='experience-list'>
            {jobs.map((job) => (
              <li key={job.id} className='experience-item'>
                <h4>{job.company}</h4>
                <h5>{job.title}</h5>
                <h6>{job.date}</h6>
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
