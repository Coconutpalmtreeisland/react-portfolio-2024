import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CommentContent from './CommentContent';

const CommentList = () => {
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        axios
            .post("/api/reple/getreple")
            .then((res) => {
                if (res.data.success) {
                    // console.log(res.data);
                    setCommentList([...res.data.commentList]);
                }
            })
    }, [])

    return (
        <div className="comment__list">
            <ul>
                {commentList.map((reple, idx) => {
                    return (
                        <CommentContent reple={reple} key={idx} />
                    )
                })}
            </ul>
        </div>
    )
}

export default CommentList