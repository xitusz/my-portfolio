import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
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
            <p className="text-color-#ffdc84 px-2 bg-color-#282A2C bg-cover shadow-black bg-opacity-80 w-max m-auto">
              Desenvolvedor Web Full Stack
            </p>
          </div>
          <hr className="w-40 my-9 mx-auto text-color-#ccc" />
          <div className="text-center py-2 pr-20 text-1.1rem leading-1.6rem bg-color-#282A2C bg-cover shadow-black bg-opacity-80 w-max m-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p className="ml-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p className="ml-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p className="ml-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis feugiat lacinia.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
