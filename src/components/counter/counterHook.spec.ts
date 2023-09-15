import {describe, expect, it} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useCounterHook} from "./counterHook.ts";

describe("counter hook testing", () => {

    it("should render hook and update state", async () => {
        const hook = renderHook(() => useCounterHook())

        expect(hook).toBeTruthy()

        expect(hook.result.current.count).toEqual(0)

        act(() => hook.result.current.updateCount())
        // hook.result.current.updateCount()

        // fails if update count not called from inside 'act'
        expect(hook.result.current.count).toEqual(1)
    })
})
