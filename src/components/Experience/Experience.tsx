import { Typography } from '@mui/material';

import './Experience.css';

export default function Experience() {
  const jobs = [
    {
      id: 0,
      duration: .5,
      link: 'https://www.intralinks.com/',
      company: 'SS&C Intralinks',
      title: 'Software Engineer Intern',
      date: 'JUN 2021 - DEC 2021',
      description: 'Developed investment management and fund reporting solutions that is used by over 515,000 individuals from 100,000 organizations. Implemented various frontend and backend features, most notably a critical faul-tolerance and recovery system.',
    },
    {
      id: 1,
      duration: .75,
      link: 'https://wit.edu/',
      company: 'Wentworth Institute of Technology',
      title: 'Research Developer',
      date: 'SEP 2022 - DEC 2022',
      description: `Led a team of 4 members to design and develop a 2D platformer game that aimed to educate the public on the effects of global pollution on Earth's oceans. Implemented core game engine features using Object-Oriented design principles, as well as providing mentorship to group members who were unfamiliar with Agile and Scrum methodologies, version control, pull requests, and testing.`,
    },
  ];

  return (
    <section id='experience' className='experience'>
      <div className='experience-wrapper'>
        <Typography variant='h2'>Experience</Typography>
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
                    <Typography variant='h4'>{job.company}</Typography>
                    <hr></hr>
                    <Typography variant='h5' style={{marginBottom: '1rem'}}>{job.title}</Typography>
                    <Typography variant='h6' style={{marginBottom: '1rem'}}>{job.date}</Typography>
                    <Typography variant='body1'>{job.description}</Typography>
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
