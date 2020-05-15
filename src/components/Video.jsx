import React from 'react'

const Video = ({ url }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <section className="site-block" style={{ paddingBottom: '35px' }}>
            <div
              className="iframe-container"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <iframe
                width="860"
                height="475"
                title="Youtube"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Video
