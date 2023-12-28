import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CommentWrite = () => {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [reload, setReload] = useState(false);

    useEffect(() => {
        if (reload) {
            window.location.reload();
        }
    }, [reload]);

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!comment || !name || !password) {
            return alert("이름, 비밀번호, 댓글을 모두 채워야 댓글을 작성할 수 있습니다.");
        }

        let body = {
            reple: comment,
            name: name,
            password: password,
        }

        axios
            .post("/api/reple/submit", body)
            .then((res) => {
                if (res.data.success) {
                    alert("댓글이 작성되었습니다!🥰");
                    setReload(true);
                } else {
                    alert("댓글을 작성하지 못했습니다.");
                }
            })
    }

    return (
        <div className="input__info">
            <label htmlFor='name'>
                <input
                    style={{ imeMode: 'active' }}
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => { setName(e.currentTarget.value) }}
                />
            </label>
            <label htmlFor="password">
                <input
                    style={{ imeMode: 'inactive' }}
                    type="text"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => { setPassword(e.currentTarget.value) }}
                />
            </label>
            <label htmlFor="comment" className='comment'>
                <textarea
                    style={{ imeMode: 'active' }}
                    name="comment"
                    id="comment"
                    placeholder="댓글을 작성해주세요."
                    value={comment}
                    onChange={(e) => { setComment(e.currentTarget.value) }}
                ></textarea>
            </label>
            <button
                onClick={(e) => { SubmitHandler(e) }}
            >작성</button>
        </div>
    )
}

export default CommentWrite