import {Post} from "./post.ts";

import style from "./PostList.module.css"
interface PostListProps {
    posts: Post[]
    title: string
}

export const PostList = ({posts, title}: PostListProps) => {
    return <>
        <h5 title={title}>Recent posts</h5>
        {posts && posts.map(post => <div key={post.id}>
            <fieldset className={style.item} title="recent posts">
                <legend>{post.title}</legend>
                {post.body}
            </fieldset>
            </div>
        )}
    </>
}
