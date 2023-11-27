
import './Experience.css';

const jobs = [
  {
    id: 0,
    link: 'https://www.intralinks.com/',
    company: 'ss&c intralinks',
    title: 'software engineer intern',
    date: 'jun 2021 - dec 2021',
    description: 'developed investment management and fund reporting solutions that is used by over 515,000 individuals from 100,000 organizations. implemented various frontend and backend features, most notably a critical faul-tolerance and recovery system.',
  },
  {
    id: 1,
    link: 'https://wit.edu/',
    company: 'wentworth institute of technology',
    title: 'research developer',
    date: 'sep 2022 - dec 2022',
    description: `Led a team of 4 members to design and develop a 2D platformer game that aimed to educate the public on the effects of global pollution on Earth's oceans. Implemented core game engine features using Object-Oriented design principles, as well as providing mentorship to group members who were unfamiliar with Agile and Scrum methodologies, version control, pull requests, and testing.`,
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
                <a 
                  href={job.link} 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <div className='experience-item-content'>
                    <h4>{job.company}</h4>
                    <hr></hr>
                    <h5>{job.title}</h5>
                    <h6>{job.date}</h6>
                    <p>{job.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
