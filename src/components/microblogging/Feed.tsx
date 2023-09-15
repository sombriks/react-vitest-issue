import {NewPost} from "./NewPost.tsx";
import {PostList} from "./PostList.tsx";
import {useCallback, useEffect, useState} from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/posts"

export const Feed = () => {

    const [posts, setPosts] = useState([])

    const savePost = useCallback(async (newPost) => {
        await fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newPost)
        })
    }, [])

    useEffect(() => {
        fetch(apiUrl, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(result => result.json())
            .then(result => setPosts(result))
    }, [])

    return <>
        <NewPost onSave={savePost}></NewPost>
        <PostList posts={posts}></PostList>
    </>
}
