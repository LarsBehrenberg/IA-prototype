import React from 'react'

const SearchBar = () => (
    <section class="promotionWrapper">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="promotionTable">
                        <div class="promotionTableInner">
                            <div class="promotionInfo">
                                <h2>FIND YOUR FAVORITE IMPRESSIONIST</h2>
                                <div class="ttde__sdst">
                                    <div class="ui search">
                                        <div class="ui icon input"> <input class="prompt" type="text"
                                                placeholder="Search..." autocomplete="off" /></div>
                                        <div class="results"></div>
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