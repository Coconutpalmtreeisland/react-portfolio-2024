import React from 'react'
import CommentList from './comment/CommentList'
import CommentWrite from './comment/CommentWrite'

const Section4 = () => {
    return (
        <section id="section4">
            <div className="window__wrap">
                <div className="window__bar"></div>
                <div className="title"><span></span>comment</div>
                <div className="comment__wrap">
                    <CommentList />
                    <CommentWrite />
                </div>
                <div className="bar__bottom"></div>
            </div>
        </section>
    )
}

export default Section4