import React from "react";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

const Project = ({ name, image, info, about, github, deployed, page }) => {
  return (
    <div className="flex flex-col items-center snap-start scroll-ml-6 my-6 mx-6 pb-6 rounded min-w-30% bg-color-#282A2C bg-cover shadow-black bg-opacity-70">
      <p className="text-1.2rem font-bold p-4">{name}</p>
      <ModalImage
        className="w-full mb-4"
        small={image}
        large={image}
        alt={name}
        hideDownload="false"
        hideZoom="false"
      />
      <div className="flex justify-evenly w-full">
        {info ? <p>{about}</p> : <></>}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="shadow-black p-1 rounded-20%"
        >
          <img
            src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
            alt="github"
            height="50px"
            width="50px"
          />
        </a>
        {deployed ? (
          <a href={page} target="_blank" rel="noreferrer"></a>
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
