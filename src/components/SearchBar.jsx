import React from 'react'

const SearchBar = () => (
    <section className="promotionWrapper">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="promotionTable">
                        <div className="promotionTableInner">
                            <div className="promotionInfo">
                                <h2>FIND YOUR FAVORITE IMPRESSIONIST</h2>
                                <div className="ttde__sdst">
                                    <div className="ui search">
                                        <div className="ui icon input"> <input className="prompt" type="text"
                                                placeholder="Search..." autoComplete="off" /></div>
                                        <div className="results"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SearchBar