import {describe, expect, it} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useConuterHook} from "./counterHook.ts";

describe("counter hook testing", () => {

    it("should render hook and update state", async () => {
        const hook = renderHook(() => useConuterHook())

        expect(hook).toBeTruthy()

        expect(hook.result.current.count).toEqual(0)

        act(() => hook.result.current.updateCount())
        // hook.result.current.updateCount()

        // fails if don't call update count from inside act
        expect(hook.result.current.count).toEqual(1)
    })
})
