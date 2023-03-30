import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stack from "../components/Stack";
import {
  languages,
  frameworkLibrary,
  testing,
  dataBase,
  orm,
  cloud,
  others,
} from "../data/stacks";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="flex mx-12 mt-6 text-1.1rem">
          <div className="text-center mr-1 w-3/6 leading-1.6rem">
            <p>Olá 👋, Eu sou o Gabriel Alves</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
          </div>
          <div className="text-center ml-1 w-3/6">
            <img src="" alt="Minha foto" className="w-full" />
          </div>
        </div>
        <hr className="w-30% my-9 mx-auto text-color-#ccc" />
        <div className="text-center mb-28 py-2 w-3/5 m-auto bg-color-#282A2C bg-cover shadow-black bg-opacity-70">
          <h1 className="text-4xl font-bold mb-2 font-albertson tracking-wider">
            Habilidades
          </h1>
          <div className="mb-6">
            <p className="text-1.2rem mb-4">- Linguagens -</p>
            <div className="flex justify-center flex-wrap">
              {languages.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-1.2rem mb-4">- Frameworks & Libraries -</p>
            <div className="flex justify-center flex-wrap">
              {frameworkLibrary.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-1.2rem mb-4">- Testes -</p>
            <div className="flex justify-center flex-wrap">
              {testing.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-1.2rem mb-4">- Banco de Dados -</p>
            <div className="flex justify-center flex-wrap">
              {dataBase.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-1.2rem mb-4">- ORM -</p>
            <div className="flex justify-center flex-wrap">
              {orm.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-1.2rem mb-4">- Nuvem -</p>
            <div className="flex justify-center flex-wrap">
              {cloud.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-1.2rem mb-4">- Outros -</p>
            <div className="flex justify-center flex-wrap">
              {others.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
