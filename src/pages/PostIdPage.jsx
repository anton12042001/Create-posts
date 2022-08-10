import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostService from "../api/PostService";
import Loader from "../components/UI/Loader/Loader";
import CommentsPosts from "./CommentsPosts";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getBuId(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading ? <Loader/> : <div>{post.id}.{post.title}</div>}
            <h1>Комментарии</h1>
            {isComLoading ? <Loader/> : <CommentsPosts/> }
        </div>
    );
};

export default PostIdPage;