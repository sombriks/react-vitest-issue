import {describe, it, expect} from "vitest";
import {renderHook, waitFor} from "@testing-library/react";
import {useFeedHooks} from "./feedHooks.ts";

describe("Feed hooks unit tests", () => {
    it("should return load multiple posts", async () => {
        const hooks = renderHook(() => useFeedHooks())

        await waitFor(() => {
            const {posts} = hooks.result.current;

            expect(posts.length).toBeGreaterThan(0)
        })
    })
})
