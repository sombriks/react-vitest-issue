import {describe, expect, it} from "vitest";
import {render, screen} from '@testing-library/react';
import {Feed} from "./Feed.tsx";

describe("Feed render test", () => {

    it("Should render the feed", async () => {
        const component = render(<Feed/>)
        expect(component).toBeTruthy()

        const postList = await screen.findByTitle("posts")
        expect(postList).toBeTruthy()

        const recentPosts = await screen.findAllByTitle("recent posts")
        expect(recentPosts).toBeTruthy()
    })
})
