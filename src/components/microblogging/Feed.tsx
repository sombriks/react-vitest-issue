import {NewPost} from "./NewPost.tsx";
import {PostList} from "./PostList.tsx";
import {useFeedHooks} from "./feedHooks.ts";

export const Feed = () => {

    const {savePost, posts} = useFeedHooks()

    return <>
        <NewPost onSave={savePost}></NewPost>
        <PostList title="posts" posts={posts}></PostList>
    </>
}
