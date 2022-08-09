import React from 'react';
import '../styles/App.css'
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div className="post" >
            <div className="postContent">
                <strong>{props.post.id}.{props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="postBtn">
                <MyButton onClick={() => props.remove(props.post)} >Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;