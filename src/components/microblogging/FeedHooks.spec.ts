import {describe, it, expect} from "vitest";
import {renderHook} from "@testing-library/react";
import {useFeedHooks} from "./feedHooks.ts";

describe("Feed hooks unit tests", () => {

    it("should render the hooks", () => {
        const hooks = renderHook(() => useFeedHooks())

        expect(hooks).toBeTruthy()

        // i think i got the problem 🎉
        // expect(hooks.result.current.posts.length > 0).toBeTruthy()

    })
})
