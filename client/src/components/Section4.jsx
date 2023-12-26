import React from 'react'

const Section4 = () => {
    return (
        <section id="section4">
            <div className="window__wrap">
                <div className="window__bar"></div>
                <div className="title"><span></span>comment</div>
                <div className="comment__wrap">
                    <div className="comment__list">
                        <ul>
                            <li className="comment__top">
                                <ul>
                                    <li className="name">이름</li>
                                </ul>
                            </li>
                            <li className="comment__bottom">예시 댓글입니다. 댓글을 달아주세요!!</li>
                        </ul>
                        <ul>
                            <li className="comment__top">
                                <ul>
                                    <li className="name">이름</li>
                                </ul>
                            </li>
                            <li className="comment__bottom">댓글 내용</li>
                        </ul>
                        <ul>
                            <li className="comment__top">
                                <ul>
                                    <li className="name">이름</li>
                                </ul>
                            </li>
                            <li className="comment__bottom">댓글 내용</li>
                        </ul>
                    </div>
                    <div className="input__info">
                        <input type="text" placeholder="이름" />
                        <input type="text" placeholder="비밀번호" />
                        <textarea name="comment" id="comment" placeholder="댓글을 작성해주세요."></textarea>
                        <button>작성</button>
                    </div>
                </div>
                <div className="bar__bottom"></div>
            </div>
        </section>
    )
}

export default Section4