import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mx-4 mt-8">
        <div className="w-full max-w-screen-xl mx-auto p-4 py-8">
          <div className="flex items-center justify-between">
            <a
              href="https://github.com/xitusz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:underline hover:text-color-#ffdc84 active:text-color-#ffba05"
            >
              <img
                src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
                alt="github"
                className="h-16"
              />
              <p className="text-2xl font-semibold whitespace-nowrap">
                GitHub
              </p>
            </a>
            <ul className="flex flex-wrap">
              <li className="pr-2">
                <a
                  href="https://www.linkedin.com/in/gabrielalves1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                    alt="linkedIn"
                    className="shadow-black"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:2kgabrielalves@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                    alt="gmail"
                    className="shadow-black"
                  />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 text-color-#ccc shadow-black mx-auto" />
          <p className="block text-1rem text-color-#ccc text-center bg-color-#282A2C bg-cover shadow-black bg-opacity-70 p-1 w-max m-auto">
            © 2023{" "}
            <a
              href="https://github.com/xitusz"
              className="hover:underline hover:text-color-#ffdc84 active:text-color-#ffba05"
            >
              Gabriel Alves
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
