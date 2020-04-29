/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const TextSection = ({
  title,
  text,
  textSectionImageArray,
  index,
  showGallery,
  openGallery,
}) => {
  function ttdeToggleVisibility() {
    document.getElementById(`site-text-more-button-${index + 1}`).remove();
    document.getElementById(`view-content-${index + 1}`).classList.add('auto');
  }

  function findImage(num) {
    const arr = document.getElementsByClassName('smallery-item-psn');
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] == arr.namedItem(num)) {
        openGallery();
        showGallery(x + 5);
        return x;
      }
    }
    openGallery();
    showGallery(1);
    return 1;
  }

  const newTitle = `${index + 1}. ${title}`;
  return (
    <div className="container" id={index + 1}>
      <div className="row">
        <div className="col-sm-9">
          <section className="site-block">
            <h2>{newTitle}</h2>
            <div className="row">
              <div className="col-sm-3">
                <div className="smallery">
                  {textSectionImageArray !== null
                    ? textSectionImageArray.map((image, arrayLocation) => {
                        return (
                          <div
                            className="smallery-item-wrp ttdegalleryitem"
                            data-pswp-uid="1"
                            key={arrayLocation}
                          >
                            <figure
                              className="smallery-item-psn"
                              id={index.toString() + arrayLocation.toString()}
                              onClick={() => {
                                findImage(
                                  index.toString() + arrayLocation.toString(),
                                );
                              }}
                            >
                              <span className="smallery-item-uri">
                                <Img
                                  fluid={image.imageUrl.childImageSharp.fluid}
                                  alt={image.imageTitle}
                                  className="smallery-item-img"
                                  loading="lazy"
                                />
                              </span>
                            </figure>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
              <div className="col-sm-9">
                <div className="site-text">
                  <div
                    className="site-text-less"
                    id={`view-content-${index + 1}`}
                  >
                    <div id={`view-content-height-${index + 1}`}>
                      <div dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                  </div>
                  <div
                    className="site-text-more"
                    id={`site-text-more-button-${index + 1}`}
                  >
                    <span
                      className="btn btn-outline"
                      onClick={ttdeToggleVisibility}
                    >
                      Expand to read more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TextSection;

TextSection.propTypes = {
  title: PropTypes.any.isRequired,
  text: PropTypes.any.isRequired,
};
