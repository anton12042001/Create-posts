import React from 'react';
import {useEffect, useState} from "react";
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import {useParams} from "react-router-dom";

const CommentsPosts = () => {
    const params = useParams()

    const [comments, setComments] = useState([])
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchComments(params.id)
    },[])

    return (
        <div>
            {comments.map(comm =>
                <div style={{marginTop: 15}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}
        </div>
    );
};

export default CommentsPosts;