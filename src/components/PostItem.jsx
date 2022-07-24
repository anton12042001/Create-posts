import React from 'react';
import '../styles/App.css'

const PostItem = (props) => {
    return (
        <div className="post" >
            <div className="postContent">
                <strong>{props.number}.{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="postBtn">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem;