import React from 'react';
import PropTypes from 'prop-types';




const TextSection = ({ title, text, textSectionImageArray, index }) => {


    function ttdeToggleVisibility (self, id, idInner) {
        document.getElementById("site-text-more-button-"+(index+1)).remove()
        document.getElementById("view-content-"+(index+1)).classList.add("auto")
    }

    const newTitle = ((index+1)+ ". " + title)

  return (
    <div className="container" id={index+1}>
        <div className="row">
            <div className="col-sm-9">
            <section className="site-block">
                <h2>{newTitle}</h2>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="smallery">
                            {
                                // console.log(textSectionImageArray)
                                textSectionImageArray.map((image, index) => {
                                return (
                                    <div className="smallery-item-wrp ttdegalleryitem" data-pswp-uid="1">
                                        <figure className="smallery-item-psn"> <a href={"#" + (index+1)} className="smallery-item-uri" data-cat="1" title="FILLINALT" data-size="FILLINSIZE" data-pid="FILLINPICS" data-index="FILLINNUMBER">
                                            <img className="smallery-item-img loaded" data-src={image.childImageSharp.fluid.src} alt="FILLINALT" src={image.childImageSharp.fluid.src} data-was-processed="true" />
                                        </a> </figure>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className="col-sm-9">
                      <div className="site-text">
                        <div className="site-text-less" id="view-content-1">
                          <div id="view-content-height-1">
                          <div dangerouslySetInnerHTML={{ __html: text }} />
                          </div>
                        </div>
                        <div className="site-text-more" id={"site-text-more-button-"+(index+1)}>
                            <a className="btn btn-outline" href={"#"+(index+1)} onClick={ttdeToggleVisibility}>Expand to read more</a>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </div>
)};

export default TextSection

TextSection.propTypes = {
  title: PropTypes.any.isRequired,
  text: PropTypes.any.isRequired,
};