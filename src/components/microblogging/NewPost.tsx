import {Post} from "./post.ts";
import {SyntheticEvent} from "react";

interface NewpPostProps {
    onSave: (post: Post) => void
}

interface NewPostForm {
    title: { value: string },
    body: { value: string }
}

export const NewPost = ({onSave}: NewpPostProps) => {

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const {title, body} = e.target as unknown as NewPostForm
        onSave({title: title.value, body: body.value})
        title.value = ""
        body.value = ""
    }

    return <>
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Title:&nbsp;
                    <input type="text" title="title" name="title" required/>
                </label>
            </div>
            <div>
                <label>
                    Body:&nbsp;
                    <input type="text" title="body" name="body" required/>
                </label>
            </div>
            <div>
                <button type="submit" title="submit button">Save</button>
            </div>
        </form>
    </>
}
