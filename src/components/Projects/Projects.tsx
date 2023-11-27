import './Projects.css';

const projects = [
  {
    id: 0,
    image: 'SwiftAPI.png',
    name: 'SwiftAPI',
    description: 'A platform for developers to monetize their APIs and for users to purchase APIs in just a few clicks. Provides analytics, monitoring, and loggin features.',
    techStack: [
      {
        id: 0,
        name: 'React'
      },
      {
        id: 1,
        name: 'TypeScript'
      },
      {
        id: 2,
        name: 'Node.js'
      },
      {
        id: 3,
        name: 'MongoDB'
      }
    ],
    link: 'https://github.com/setoi1/SwiftAPI'
  },
  {
    id: 1,
    image: 'FiMan.png',
    name: 'Finance Manager',
    description: 'A finance manager application built with Python.',
    techStack: [
      {
        id: 0,
        name: 'Python'
      }, 
      {
        id: 1, 
        name: 'tkinter',
      }, 
      {
        id: 2,
        name: 'RESTful APIs'
      }
    ],
    link: 'https://github.com/marinom1/FiMan-Financial_Manager'
  },
  {
    id: 2,
    image: 'Stock.png',
    name: 'Million Ether Page',
    description: '',
    techStack: [
      {
        id: 0,
        name: 'Solidity',
      },
      {
        id: 1,
        name: 'Etherium',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'CSS',
      },
    ],
    link: 'https://github.com/faceyacc/million_eth_homepage'
  },
  {
    id: 3,
    image: 'Stock.png',
    name: 'Stock Market Bot',
    description: 'A bot to display user-requested stock information such as news, prices, and company information.',
    techStack: [
      {
        id: 0,
        name: 'JavaScript'
      },
      {
        id: 1,
        name: 'Node.js'
      },
      {
        id: 2,
        name: 'RESTful APIs'
      }
    ],
    link: 'https://github.com/setoi1/Stock-Market-Discord-Bot'
  },
];

export default function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='projects-wrapper'>
        <h2>Projects</h2>
        <div className='projects-content'>
          <ul className='projects-list'>
            {projects.map(project => 
              <>
                <hr></hr>
                <a href={project.link}>
                  <li key={project.id} className='project-item'>
                    <div className='text-here'>
                      {project.name}
                    </div>
                  </li>
                </a>
              </>
            )}
          </ul>
        </div>
        <a 
          href='https://github.com/setoi1/' 
          rel='noreferrer' 
          target='_blank' 
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
