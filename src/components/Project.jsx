import React from "react";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Project = ({ name, image, info, about, github, deployed, page }) => {
  return (
    <div className="flex flex-col items-center snap-start scroll-ml-6 my-6 mx-6 pb-6 rounded border-solid border-8 border-background-50 bg-cover bg-background2 shadow-black min-w-460px max-w-460px">
      <p className="text-1.2rem font-bold pt-4 px-4">{name}</p>
      <hr className="w-3/6 mx-auto shadow-black border-solid border-2 border-background-50" />
      <ModalImage
        className="w-full my-4 border-solid border-y-4 border-background-50"
        small={image}
        large={image}
        alt={name}
        hideDownload="false"
        hideZoom="false"
      />
      <div className="flex justify-evenly w-full">
        {info ? (
          <a
            href={about}
            target="_blank"
            rel="noreferrer"
            className="p-1 rounded-20% border-solid border-4 border-background-50 bg-cover bg-background2 shadow-black"
          >
            <BsFillInfoCircleFill
              size={26}
              className="text-white icon hover:text-color-#ffdc84 active:text-color-#ffba05 hover:scale-110 duration-200"
              data-testid="info-icon"
            />
          </a>
        ) : (
          <></>
        )}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="p-1 rounded-20% border-solid border-4 border-background-50 bg-cover bg-background2 shadow-black"
        >
          <FaGithub
            size={26}
            className="text-white icon hover:text-color-#ffdc84 active:text-color-#ffba05 hover:scale-110 duration-200"
            data-testid="github-icon"
          />
        </a>
        {deployed ? (
          <a
            href={page}
            target="_blank"
            rel="noreferrer"
            className="p-1 rounded-20% border-solid border-4 border-background-50 bg-cover bg-background2 shadow-black"
          >
            <GrDeploy
              size={26}
              className="text-white icon hover:text-color-#ffdc84 active:text-color-#ffba05 hover:scale-110 duration-200"
              data-testid="deployed-icon"
            />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.bool.isRequired,
  about: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  deployed: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
};

export default Project;
