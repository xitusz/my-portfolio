import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="flex justify-center items-center fixed w-full text-center bg-transparent bottom-0 left-0">
        <div className="flex justify-center items-center bg-color-#282A2C py-2 px-8 pb-3 rounded-t-3rem shadow-black">
          <a
            href="https://www.linkedin.com/in/gabrielalves1/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667"
              alt="linkedIn"
              height="50px"
              width="50px"
              className="rounded-full"
            />
          </a>
          <a
            href="https://github.com/xitusz"
            target="_blank"
            rel="noreferrer"
            className="mx-2.5"
          >
            <img
              src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
              alt="github"
              height="60px"
              width="60px"
            />
          </a>
          <a
            href="mailto:2kgabrielalves@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://camo.githubusercontent.com/a6d8a862aecb6411e963408e9b3c7666ab357cdfecc14a3a13645eb489688cc8/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676d61696c5f6f6c642e737667"
              alt="gmail"
              height="50px"
              width="50px"
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
