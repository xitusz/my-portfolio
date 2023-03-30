import React from "react";
import PropTypes from "prop-types";
import ModalImage from "react-modal-image";

class Project extends React.Component {
  render() {
    const { name, image, info, about, github, deployed, page } = this.props;

    return (
      <div>
        <p>{name}</p>
        <ModalImage
          small={image}
          large={image}
          alt={name}
          hideDownload="false"
          hideZoom="false"
        />
        <div>
          {info ? <p>{about}</p> : <></>}
          <a href={github} target="_blank" rel="noreferrer">
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
  }
}

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
