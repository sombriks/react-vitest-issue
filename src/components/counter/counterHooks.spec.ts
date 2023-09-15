import {describe, expect, it} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useCounterHooks} from "./counterHooks.ts";

describe("counter hooks testing", () => {

    it("should render hooks and update state", async () => {
        const hooks = renderHook(() => useCounterHooks())

        expect(hooks).toBeTruthy()

        expect(hooks.result.current.count).toEqual(0)

        act(() => hooks.result.current.updateCount())
        // hooks.result.current.updateCount()

        // fails if update count not called from inside 'act'
        expect(hooks.result.current.count).toEqual(1)
    })
})
