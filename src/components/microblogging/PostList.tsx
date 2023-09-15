
export const PostList = ({posts}) => {
    return <>
        {posts && posts.map(post => <div key={post.id}>
            <fieldset>
                <legend>{post.title}</legend>
                {post.body}
            </fieldset>
            </div>
        )}
    </>
}
