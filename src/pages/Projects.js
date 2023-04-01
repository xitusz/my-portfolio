import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Button from "../components/Button";
import {
  personal,
  fundamentals,
  frontEnd,
  backEnd,
  computerScience,
} from "../data";

class Projects extends React.Component {
  constructor() {
    super();

    this.state = {
      module: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="text-center mx-auto mb-28 mt-6">
          <div className="mb-12">
            <h1 className="text-4xl font-bold font-albertson tracking-wider">
              Projetos pessoais
            </h1>
            <div className="flex flex-nowrap snap-x overflow-x-auto m-auto w-4/5">
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
          <hr className="w-3/6 mx-auto my-6 items-center text-color-#ccc shadow-black" />
          <div>
            <h1 className="text-4xl font-bold mb-6 font-albertson tracking-wider">
              Projetos desenvolvidos na{" "}
              <a
                href="https://www.betrybe.com/"
                target="_blank"
                rel="noreferrer"
                className="text-color-#ffdc84 no-underline hover:text-color-#ffba05"
              >
                Trybe
              </a>
            </h1>
            <div className="flex justify-center m-auto mb-3 items-center">
              <Button onClick={() => this.setState({ module: "fundamentals" })}>
                Fundamentos
              </Button>
              <Button onClick={() => this.setState({ module: "front-end" })}>
                Front End
              </Button>
              <Button onClick={() => this.setState({ module: "back-end" })}>
                Back End
              </Button>
              <Button
                onClick={() => this.setState({ module: "computer-science" })}
              >
                Ciências da computação
              </Button>
            </div>
            {this.state.module === "" && (
              <div>
                <p className="text-2xl font-bold text-color-#ffdc84">
                  - Selecione um módulo acima -
                </p>
              </div>
            )}
            {this.state.module === "fundamentals" && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold">- Fundamentos -</h2>
                <div className="flex flex-nowrap snap-x overflow-x-auto m-auto w-4/5">
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
            )}
            {this.state.module === "front-end" && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold">- Front End -</h2>
                <div className="flex flex-nowrap snap-x overflow-x-auto m-auto w-4/5">
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
            )}
            {this.state.module === "back-end" && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold">- Back End -</h2>
                <div className="flex flex-nowrap snap-x overflow-x-auto m-auto w-4/5">
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
            )}
            {this.state.module === "computer-science" && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold">
                  - Ciências da Computação -
                </h2>
                <div className="flex flex-nowrap snap-x overflow-x-auto m-auto w-4/5">
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
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
