import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import {
  personal,
  fundamentals,
  frontEnd,
  backEnd,
  computerScience,
} from "../data";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <h1>Projetos pessoais</h1>
            <div>
              {personal.map((project) => (
                <Project
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  info={project.info}
                  about={project.about}
                  github={project.github}
                  deployed={project.deployed}
                  page={project.page}
                />
              ))}
            </div>
          </div>
          <hr />
          <div>
            <h1>
              Projetos desenvolvidos na{" "}
              <a
                href="https://www.betrybe.com/"
                target="_blank"
                rel="noreferrer"
              >
                Trybe
              </a>
            </h1>
            <div>
              <h2>- Fundamentos -</h2>
              <div>
                {fundamentals.map((project) => (
                  <Project
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    info={project.info}
                    about={project.about}
                    github={project.github}
                    deployed={project.deployed}
                    page={project.page}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2>- Front End -</h2>
              <div>
                {frontEnd.map((project) => (
                  <Project
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    info={project.info}
                    about={project.about}
                    github={project.github}
                    deployed={project.deployed}
                    page={project.page}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2>- Back End -</h2>
              <div>
                {backEnd.map((project) => (
                  <Project
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    info={project.info}
                    about={project.about}
                    github={project.github}
                    deployed={project.deployed}
                    page={project.page}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2>- Ciências da Computação -</h2>
              <div>
                {computerScience.map((project) => (
                  <Project
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    info={project.info}
                    about={project.about}
                    github={project.github}
                    deployed={project.deployed}
                    page={project.page}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
