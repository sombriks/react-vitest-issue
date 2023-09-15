import {useCallback, useEffect, useState} from "react";
import {Post} from "./post.ts";


const apiUrl = "https://jsonplaceholder.typicode.com/posts"

export function useFeedHooks() {

    const [posts, setPosts] = useState<Post[]>([])

    const savePost = useCallback(async (newPost: Post) => {
        const result = await fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newPost)
        })
        const newOne = await result.json()
        newOne.id = new Date().getTime()
        setPosts(posts => ([newOne as Post, ...posts]))
    }, [])

    const listPosts = async () => {
        const result1 = await fetch(apiUrl, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const result2 = await result1.json()
        setPosts(result2)

    }

    // this bad boy here doesn't work if the unit tests renders the hook instead the component
    useEffect(() => {
        listPosts()
    }, [listPosts])

    return {posts, setPosts, savePost, listPosts}
}
