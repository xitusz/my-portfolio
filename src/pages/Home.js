import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <p>GABRIEL</p>
            <p>ALVES</p>
          </div>
          <div>
            <p>Desenvolvedor Web Full Stack</p>
          </div>
          <hr />
          <div>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
