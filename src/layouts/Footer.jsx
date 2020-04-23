import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
    <footer className="site-footer">
        <div className="container">
        <div className="col-md-4"><a className="btn btn-white-outline" href="#top">Dearest impressionist paintings</a></div>
        <div className="col-md-4"><a className="btn btn-white-outline" href="#top">Impressionist
            Timeline</a></div>
        <div className="col-md-4"><Link className="btn btn-white-outline" to="impressionism-quiz">
            Impressionist Quiz</Link></div>
        </div>
    </footer>
)

export default Footer