import {describe, it, expect} from "vitest";
import {renderHook, waitFor} from "@testing-library/react";
import {useFeedHooks} from "./feedHooks.ts";

describe("Feed hooks unit tests", () => {
    it("should render the hooks", () => {
        const hooks = renderHook(() => useFeedHooks())

        expect(hooks).toBeTruthy()

        waitFor(() => expect(hooks.result.current.posts.length > 0).toBeTruthy())
    })
})
