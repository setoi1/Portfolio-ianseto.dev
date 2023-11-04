import { motion } from 'framer-motion';
import './styles/Experience.css';
import { Typography } from '@mui/material';

export default function Experience() {
  const jobs = [
    {
      'id': '0',
      'duration': .5,
      'link': 'https://www.intralinks.com/',
      'company': 'SS&C Intralinks',
      'title': 'Software Engineer Intern',
      'date': 'June 2021 - December 2021',
      'description': 'Developed investment management and fund reporting solutions that is used by over 515,000 individuals from 100,000 organizations. Implemented various frontend and backend features, most notably a critical faul-tolerance and recovery system.',
    },
    {
      'id': '1',
      'duration': .75,
      'link': 'https://wit.edu/',
      'company': 'Wentworth Institute of Technology',
      'title': 'Research Developer',
      'date': 'September 2022 - December 2022',
      'description': `Led a team of 4 members to design and develop a 2D platformer game that aimed to educate the public on the effects of global pollution on Earth's oceans. Implemented core game engine features using Object-Oriented design principles, as well as providing mentorship to group members who were unfamiliar with Agile and Scrum methodologies, version control, pull requests, and testing.`,
    },
  ]

  return (
    <section id='experience' className='experience-section'>
      <Typography variant='h1'>Experience</Typography>
      <div className='experience-content'>
        <div className='experience-detail'>
          <ul className='experience-list'>
            {jobs.map((job) => (
              <li className='experience-item'>
                <a 
                  href={job.link} 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <div className='experience-item-content'>
                    <Typography>
                      <h2>{job.company}</h2>
                      <h3>{job.title}</h3>
                      <h4>{job.date}</h4>
                      <p>{job.description}</p>
                    </Typography>
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
