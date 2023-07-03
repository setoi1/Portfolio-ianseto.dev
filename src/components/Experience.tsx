import './styles/Experience.css';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience-section">
        <h1 className="experience-header-text">Experience</h1>
        <div className="experience-content">
          <div className="experience-detail">
            <ul className="experience-list">
              <motion.div
                initial={{ y: 50 , opacity: 0 }}
                whileInView={{ y: 0 , opacity: 1 }}
                viewport={{ once: true, amount: .25 }}
                transition={{ duration: 1 }}
              >
                <li className="experience-item">
                  <h3>SS&C Intralinks | Software Engineer Intern</h3>
                  <h4>June 2021 - December 2021</h4>
                  <p>
                    Developed investment management and fund reporting solutions that is used by over 515,000 individuals from 100,000 organizations. 
                    Completed full-stack implementations on UI and critical fault tolerance systems.
                  </p>
                </li>
              </motion.div>
              <br></br>
              <motion.div
                initial={{ y: 50 , opacity: 0 }}
                whileInView={{ y: 0 , opacity: 1 }}
                viewport={{ once: true, amount: .25 }}
                transition={{ duration: 1.25 }}
              >
                <li className="experience-item">
                  <h3>Wentworth Institute of Technology | Software Engineer Intern</h3>
                  <h4>September 2022 - December 2022</h4>
                  <p>
                    Designed and created a 2D platformer game that aimed to educate adolescents on the effects of global pollution on the Earth's oceans. 
                    Implemented core game engine features using Object-Oriented design principiles, 
                    as well as providing strong mentorship to group members who were unfamiliar with Agile and Scrum methodologies, version control, pull requests, and testing.
                  </p>
                </li>
              </motion.div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
