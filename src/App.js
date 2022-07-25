import React, {useMemo, useRef, useState} from "react"
import './App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "ааа", body: 'ббб'},
        {id: 2, title: "ггг", body: 'аа'},
        {id: 3, title: "ввв 3", body: 'яя'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)


    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} >Создать пользователя</MyButton>
            <MyModal visible={modal} setVisible={setModal} >
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0px"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchPosts} title="Посты про js"/>
        </div>
    );
}

export default App;
