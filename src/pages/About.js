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
        <div>
          <div>
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
          <div>
            <img src="" alt="Minha foto" />
          </div>
        </div>
        <hr />
        <div>
          <h1>Habilidades</h1>
          <div>
            <p>- Linguagens -</p>
            <div>
              {languages.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div>
            <p>- Frameworks & Libraries -</p>
            <div>
              {frameworkLibrary.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div>
            <p>- Testes -</p>
            <div>
              {testing.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div>
            <p>- Banco de Dados -</p>
            <div>
              {dataBase.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div>
            <p>- ORM -</p>
            <div>
              {orm.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div>
            <p>- Nuvem -</p>
            <div>
              {cloud.map((stack) => (
                <Stack key={stack.id} badge={stack.badge} name={stack.name} />
              ))}
            </div>
          </div>
          <div>
            <p>- Outros -</p>
            <div>
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
