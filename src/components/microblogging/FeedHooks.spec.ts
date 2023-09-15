import {describe, it, expect} from "vitest";
import {renderHook, waitFor} from "@testing-library/react";
import {useFeedHooks} from "./feedHooks.ts";

describe("Feed hooks unit tests", () => {
    it("should render the hooks", async () => {
        const hooks = renderHook(() => useFeedHooks())

        expect(hooks).toBeTruthy()

        await waitFor(() => {
            const {posts} = hooks.result.current;

            expect(posts.length).toBeGreaterThan(0)
        })
    })
})
