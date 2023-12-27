import React, { useState } from 'react'
import axios from 'axios'

const CommentContent = (props) => {
    const [reple, setReple] = useState(props.reple.reple);

    // const SubmitHandler = (e) => {
    //     e.preventDefault();

    //     let body = {
    //         name: props.reple.name,
    //         password: props.reple.password,
    //         reple: reple,
    //         repleId: props.reple._id,
    //     }

    //     axios
    //         .post("/api/reple/edit")
    // }

    return (
        <li>
            <div className="comment__top">
                <ul>
                    <li className="name">{props.reple.name}</li>
                </ul>
            </div>
            <div className="comment__bottom">{props.reple.reple}</div>
        </li>

    )
}

export default CommentContent