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

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex px-12 pt-6 text-1.1rem">
        <div className="m-auto">
          <div>
            <img
              src="https://github.com/xitusz/xitusz/raw/main/RGB.gif"
              alt="Minha foto github"
              className="border-solid border-4 m-auto border-background-50 shadow-black"
            />
          </div>
          <hr className="w-30% mx-auto shadow-black border-solid border-8 border-background-50" />
          <div className="text-center p-6 bg-background2 bg-cover shadow-black border-solid border-4 border-background-50 pr-5">
            <p>
              Olá 👋, meu nome é Gabriel Alves, tenho 22 anos e sou
              desenvolvedor full stack.
            </p>
            <p>
              Desde que tive meu primeiro contato com a programação, me
              apaixonei por essa área e venho buscando sempre me aprimorar.
            </p>
            <p>
              Minha paixão pela programação começou quando começei a aprender
              Java para programar jogos.
            </p>
            <p>
              Foi incrível ver como a programação pode ser usada para criar algo
              tão divertido e interativo.
            </p>
            <p>
              Atualmente, minhas habilidades são as listadas abaixo, estas que
              estudei e tenho conhecimento
            </p>
            <p>
              Mas, mesmo com essas habilidades, estou sempre em busca de
              aprender novas tecnologias e não recuso um desafio.
            </p>
            <p>
              Além da programação, também gosto muito de jogar com meus amigos.
            </p>
            <p>
              Seja videogame, jogos de tabuleiro ou esportes, sempre procuro
              formas de me divertir com eles.
            </p>
            <p>
              Acredito que é importante ter um equilíbrio entre trabalho e lazer
              para ter uma vida saudável e feliz.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-30% my-9 mx-auto shadow-black border-solid border-2 border-background-50" />
      <div className="px-12 m-auto flex justify-center">
        <div className="text-center py-2 px-5 m-auto bg-background2 bg-cover shadow-black border-solid border-4 border-background-50">
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
      </div>
      <Footer />
    </div>
  );
};

export default About;
