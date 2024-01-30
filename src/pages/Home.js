import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="text-center w-35% mt-40 mx-auto leading-0.3rem">
          <p className="flex justify-start text-color-#ffba05 text-8rem tracking-wider mb-24 font-albertson">
            GABRIEL
          </p>
          <p className="flex justify-end text-color-#ffba05 text-8rem tracking-wider mb-24 font-albertson">
            ALVES
          </p>
        </div>
        <div className="text-center text-1.2rem">
          <p className="text-color-#ffdc84 px-2 shadow-black w-max m-auto bg-cover bg-background2 border-solid border-4 border-background-50">
            Desenvolvedor Web Full Stack
          </p>
        </div>
        <hr className="w-40 my-9 mx-auto shadow-black border-solid border-2 border-background-50" />
        <div className="text-center py-2 px-10 text-1.1rem leading-1.6rem shadow-black w-3/6 m-auto border-solid border-8 border-background-50 bg-cover bg-background2">
          <p>
            Eu tenho o prazer de apresentar meu portfolio web desenvolvido em
            React.
          </p>
          <p>
            Ele apresenta uma visão geral dos meus projetos, minhas habilidades
            e competências técnicas.
          </p>
          <p>
            Encontrará uma seção de projetos que desenvolvi em diversas
            tecnologias, incluindo React, Node.js, MySQL e muitas outras.
          </p>
          <p>
            Mesmo não sendo um bom designer, fiz o meu melhor para criar um site
            que seja esteticamente agradável e fácil de usar.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
